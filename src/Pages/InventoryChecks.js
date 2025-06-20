import React, { useState, useEffect, useRef } from "react";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InventoryChecks = () => {
    const navigate = useNavigate()
    const dropdownRef = useRef(null);
    const { empid, empid2, empid3, empid4 } = useParams();

    const initialFormData9 = {

        unitNo: '',
        area: '',
        bsp: '',
        size: '',
        PLCs: '',
        PLCsValue: '',
        fixedCharges: '',
        totalCost: '',
        gift: '',

        bspAmount: '',
        fixedAmount: '',
        plcAmount: '',
        otherGift: '',
        unitPrice: '',
        registrationAmount: '',
    };

    const [formData9, setFormData9] = useState(initialFormData9);
    const [users, setUsers] = useState([]);
    const [users2, setUsers2] = useState([]);
    const [users3, setUsers3] = useState([]);
    const [users4, setUsers4] = useState([]);
    const [users5, setUsers5] = useState([]);
    const [project, setProject] = useState([]);
    const [checkedBoxes, setCheckedBoxes] = useState([]);
    const [employee, setEmployee] = useState({})
    const [employee2, setEmployee2] = useState({})
    const [checkedBoxess, setCheckedBoxess] = useState([]);
    const [scame, setScame] = useState([]);
    const [displayStatus, setDisplayStatus] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState({});
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [isModalOpen16, setIsModalOpen16] = useState(false);
    const [inventory, setInventory] = useState({})
    const [gift, setGift] = useState([])
    const [loading, setLoading] = useState(true);
    const [inventoryCount, setInventoryCount] = useState('');
    const [toggleValue, setToggleValue] = useState(false);

    const initialFormData = {
        excelUpload: '',
    };

    const [formData3, setFormData3] = useState(initialFormData);

    const [filterByObj, setFilterByObj] = useState({

        projectId: '',
        schemeId: '',
        schemeType: '',
        unitNo: '',
        plc: '',
        size: '',
        allocatedTo: '',
        availability: '',
        registry: '',
        luckyDrawStatus: '',

    });

    const [formData, setFormData] = useState({
        schemeType: '',
        projectId: '',
    })
    const [inventoryId, setInventoryId] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [inventoryIds, setInventoryIds] = useState(null);
    const [isModalOpen5, setIsModalOpen5] = useState(false);
    const [message, setMessage] = useState('');
    const [allocated, setAllocated] = useState(false);
    const [ids, setIds] = useState(null)
    const [role, setRole] = useState([]);
    const [total1, setTotal1] = useState('');
    const [total2, setTotal2] = useState('');
    const [total3, setTotal3] = useState('');
    const [total4, setTotal4] = useState('');
    const [total5, setTotal5] = useState('');
    const [total6, setTotal6] = useState('');
    const [plc, setPlc] = useState([])
    const [selectedGift, setSelectedGift] = useState('');
    const [toggleStates, setToggleStates] = useState({});
    const [otherGift, setOtherGift] = useState('');
    const [selectedOption, setSelectedOption] = useState('false');
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    const [isOpen, setIsOpen] = useState(false);
    const [selectedIds, setSelectedIds] = useState("");




    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    const handleOpenModal16 = (id) => {

        if (id) {
            setSelectedId(id);
            setIsModalOpen16(true);
            document.body.classList.add('modal-open');
        }
    };

    const handleCloseModal16 = () => {
        setIsModalOpen16(false);
        document.body.classList.remove('modal-open');
    };

    const handleCheckboxChange = (userId) => {
        if (checkedBoxes.includes(userId)) {
            setCheckedBoxes(checkedBoxes.filter(id => id !== userId));
        } else {
            setCheckedBoxes([...checkedBoxes, userId]);
        }
    };

    const handleGiftChange = (event) => {
        setSelectedGift(event.target.value);
    };


    const handleCheckboxChange2 = (userId) => {
        setIsChecked2(prevState => ({
            ...prevState,
            [userId]: !prevState[userId]
        }));
    };

    const handleOpenModal4 = () => {
        setIsModalOpen4(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal4 = () => {
        setIsModalOpen4(false);
        document.body.classList.remove('modal-open');
    };


    const handleOpenModal5 = () => {
        setIsModalOpen5(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal5 = () => {
        setIsModalOpen5(false);
        document.body.classList.remove('modal-open');
    };


    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in formData9) {
                if (formData9[key] !== null) {
                    formDataToSend.append(key, formData9[key]);
                }
            }
            const url = `${apiUrl}/inventory/allocateProperty?id=&mobileNumber=&emailId=&inventoryId=${selectedId}&applicantId=${empid}`;
            const response = await fetch(url, {
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
            handleCloseModal16()
            fetchDataFromApi()
            setFormData9(initialFormData9);
            toast.success(response2.message);

        } catch (error) {
            toast.error(error.message);

        }
    };

    const handleInputChange9 = (event) => {
        const { name, value } = event.target;
        setFormData9({
            ...formData9,
            [name]: value,
        });
    }

    useEffect(() => {
        const areaValue = parseFloat(employee2 && employee2.plan && `${employee2.plan.basicPriceFPP}`);
        const priceValue = parseFloat(employee.size);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            const totalValue = areaValue * priceValue;

            let formattedTotalValue = totalValue.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            setTotal1(formattedTotalValue);
            console.log('Total:', totalValue);
        } else {
            setTotal1(null);
        }
    }, [employee2 && employee2.plan && `${employee2.plan.basicPriceFPP}`, employee.size]);



    useEffect(() => {
        const priceValue = parseFloat(total1);

        if (isNaN(priceValue)) {
            console.error('Invalid total1 value:', total1);
            setTotal2(null);
            return;
        }

        // Extract the percentage number from the formData9.PLCs string
        const percentageString = formData9.PLCs || '';
        const percentageMatch = percentageString.match(/\((\d+(\.\d+)?)%\)/);


        if (percentageMatch && percentageMatch[1]) {
            const cornerPlcPercentage = parseFloat(percentageMatch[1]);
            console.log('Extracted PLC Percentage:', cornerPlcPercentage);

            if (!isNaN(cornerPlcPercentage)) {
                const totalValue = (priceValue * cornerPlcPercentage) / 100;

                let formattedTotalValue = totalValue.toFixed(2);
                if (formattedTotalValue.endsWith('.00')) {
                    formattedTotalValue = formattedTotalValue.slice(0, -3);
                }

                setTotal2(formattedTotalValue);
                console.log('Calculated Total Value:', formattedTotalValue);
            } else {
                console.error('Invalid PLC percentage:', formData9.PLCs);
                setTotal2(null);
            }
        } else {
            console.error('Failed to extract percentage from:', formData9.PLCs);
            setTotal2(null);
        }
    }, [formData9.PLCs, total1]);



    useEffect(() => {
        const priceValue = parseFloat(total1);
        const cornerPlcPercentage = parseFloat(employee2 && employee2.plan && `${employee2.plan.mainRoadPlc}`);

        if (!isNaN(cornerPlcPercentage) && !isNaN(priceValue)) {
            // Calculate the total value by taking the percentage of the total price
            const totalValue = (priceValue * cornerPlcPercentage) / 100;

            let formattedTotalValue = totalValue.toFixed(2);

            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated percentage to total2 state
            setTotal3(formattedTotalValue);
            console.log('Total:', totalValue);
        } else {
            // If any value is not a number, set total2 to null
            setTotal3(null);
        }
    }, [employee2 && employee2.plan && `${employee2.plan.mainRoadPlc}`, total1]);

    useEffect(() => {
        const priceValue = parseFloat(total1);
        const cornerPlcPercentage = parseFloat(employee2 && employee2.plan && `${employee2.plan.facultyParkPlc}`);

        if (!isNaN(cornerPlcPercentage) && !isNaN(priceValue)) {
            // Calculate the total value by taking the percentage of the total price
            const totalValue = (priceValue * cornerPlcPercentage) / 100;

            let formattedTotalValue = totalValue.toFixed(2);

            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            // Set the calculated percentage to total2 state
            setTotal4(formattedTotalValue);
            console.log('Total:', totalValue);
        } else {
            // If any value is not a number, set total2 to null
            setTotal4(null);
        }
    }, [employee2 && employee2.plan && `${employee2.plan.facultyParkPlc}`, total1]);

    useEffect(() => {
        // Define the conversion factor for square yards to square feet
        const squareYardsToSquareFeetConversionFactor = 9;

        // Parse the size value to a float and convert it from square yards to square feet
        const sizeInSquareFeet = parseFloat(employee.size) * squareYardsToSquareFeetConversionFactor;
        // Parse the fixedCharges percentage to a float
        const fixedChargesPercentage = parseFloat(employee2 && employee2.plan && `${employee2.plan.fixedCharges}`);

        // Check if both values are valid numbers
        if (!isNaN(fixedChargesPercentage) && !isNaN(sizeInSquareFeet)) {
            // Calculate the total value by multiplying the size in square feet with the fixedCharges percentage
            const totalValue = sizeInSquareFeet * fixedChargesPercentage;

            // Format the total value to two decimal places
            let formattedTotalValue = totalValue.toFixed(2);
            // Remove '.00' if it exists
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }
            // Set the calculated total to total5 state
            setTotal5(formattedTotalValue);
        } else {
            // If any value is not a number, set total5 to null
            setTotal5(null);
        }
    }, [employee2 && employee2.plan && `${employee2.plan.fixedCharges}`, employee.size]);



    useEffect(() => {
        const areaValue = parseFloat(total1);
        const priceValue = parseFloat(total5);
        const priceValues = parseFloat(total2);

        if (!isNaN(areaValue) && !isNaN(priceValue)) {
            const totalValue = areaValue + priceValue + priceValues;

            let formattedTotalValue = totalValue.toFixed(2);
            if (formattedTotalValue.endsWith('.00')) {
                formattedTotalValue = formattedTotalValue.slice(0, -3);
            }

            setTotal6(formattedTotalValue);
            console.log('Total:', totalValue);
        } else {
            setTotal6(null);
        }
    }, [total1, total5, total2]);

    // useEffect(() => {

    //     const areaValue = parseFloat(total6);


    //     if (!isNaN(areaValue) ) {
    //         // Calculate the percentage
    //         const percentageValue = areaValue * (priceValue / 100);

    //         // Format the percentage value
    //         let formattedPercentageValue = percentageValue.toFixed(2);
    //         if (formattedPercentageValue.endsWith('.00')) {
    //             formattedPercentageValue = formattedPercentageValue.slice(0, -3);
    //         } else if (formattedPercentageValue.endsWith('0')) {
    //             formattedPercentageValue = formattedPercentageValue.slice(0, -1);
    //         }

    //         setTotal7(formattedPercentageValue);


    //     } else {

    //         setTotal7(null);
    //     }
    // }, [total6]);

    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, unitNo: employee.unitNo }));
    }, [employee.unitNo]);

    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, size: employee.size }));
    }, [employee.size]);

    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, bsp: employee2 && employee2.plan && `${employee2.plan.basicPriceFPP}` }));
    }, [employee2 && employee2.plan && `${employee2.plan.basicPriceFPP}`]);

    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, fixedCharges: employee2 && employee2.plan && `${employee2.plan.fixedCharges}` }));
    }, [employee2 && employee2.plan && `${employee2.plan.fixedCharges}`]);

    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, totalCost: total6 }));
    }, [total6]);

    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, bspAmount: total1 }));
    }, [total1]);

    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, fixedAmount: total5 }));
    }, [total5]);

    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, plcAmount: total2 }));
    }, [total2]);

    useEffect(() => {
        setFormData9(prevFormData9 => ({ ...prevFormData9, unitPrice: total1 }));
    }, [total1]);

    // useEffect(() => {
    //     setFormData9(prevFormData9 => ({ ...prevFormData9, registrationAmount: total7 }));
    // }, [total7]);



    //plc  

    useEffect(() => {
        fetch(`${apiUrl}/applicant/getPlanDropdown?applicantId=${empid}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success' && Array.isArray(data.data)) {
                    setPlc(data.data);
                } else {
                    console.error('API response is not in the expected format.');
                }
            })
            .catch((error) => {
                console.error('Error fetching PLC data:', error);
            });
    }, [apiUrl, empid]);

    //project api 
    useEffect(() => {
        fetch(`${apiUrl}/project/applicantProjectDropdown`)
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

    //schame
    useEffect(() => {
        const { schemeType, projectId } = formData;
        const url = `${apiUrl}/scheme/schemeDropdown?&schemeType=${schemeType}&projectId=${projectId}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setScame(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, [formData]);


    // scame type
    useEffect(() => {
        const Token = localStorage.getItem('Token');

        fetch(`${apiUrl}/master/getAllMasterData/18`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setDisplayStatus(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);

    useEffect(() => {

        async function getEmp() {

            const Token = localStorage.getItem("Token");
            let response = await fetch(`${apiUrl}/inventory/getInventoryById?inventoryId=${selectedId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`
                },
            });
            response = await response.json();

            if (response.status === "success") {
                setEmployee(response.data);
                console.log('Fetched data:', response.data);
            }
        }

        if (selectedId) {
            getEmp();
        }
    }, [selectedId]);


    useEffect(() => {
        async function getEmpp() {

            const Token = localStorage.getItem("Token");
            let response = await fetch(`${apiUrl}/applicant/getApplicantById/${empid}`, {
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

    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        if (isOpen2 && inventoryId) {
            fetchDataFromApis(inventoryId);
            fetchDataFromApis2(inventoryId);
        }
    }, [isOpen2, inventoryId]);

    const formatDateTimes = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };


    //gift api 
    useEffect(() => {
        fetch(`${apiUrl}/gift/giftDropdown`)
            .then((response) => response.json())
            .then((data) => {
                if (data.data && Array.isArray(data.data)) {
                    setGift(data.data);
                } else {
                    console.error('API response is not in the expected format for countries.');
                }

            })
            .catch((error) => {
                console.error('Error fetching country data:', error);
            });
    }, []);


    const fetchDataFromApis2 = (id) => {

        fetch(`${apiUrl}/inventory/getApplicant?inventoryId=${id}`, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {

                if (data.status === 'success') {

                    if (Array.isArray(data.data)) {

                        setUsers5(data.data.status);
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
        fetchDataFromApis2()
    }, []);

    const fetchDataFromApis = (id) => {
        setIds(id)
        fetch(`${apiUrl}/inventory/inventoryLDOwner?inventoryId=${id}`, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {

                if (data.status === 'success') {

                    if (Array.isArray(data.data)) {
                        const formattedData = data.data.map(item => ({
                            ...item,
                            formattedDates: item.updatedAt ? formatDateTimes(item.updatedAt) : null,

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
        fetchDataFromApis()
    }, []);


    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };


    const fetchDataFromApi = async () => {
        try {
            setLoading(true);

            const { projectId, schemeId, schemeType, unitNo, plc, size, allocatedTo, availability, registry, luckyDrawStatus } = filterByObj;
            const url = `${apiUrl}/inventory/getInventory?id=&mobileNumber=&emailId=&schemeId=${schemeId}&type=${schemeType}&unitNo=${unitNo}&plc=${plc}&size=${size}&allocatedTo=${allocatedTo}&availability=${availability}&projectId=${projectId}&registry=${registry}&isEoi=false&luckyDrawStatus=${luckyDrawStatus}&isApproved=${selectedOption}`;

            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });

            const data = await response.json();
            setInventoryCount(data.totalCount)

            if (data.status === 'success' && Array.isArray(data.data)) {
                const formattedData = data.data.map(item => ({
                    ...item,
                    formattedDate: item.createdAt ? formatDateTime(item.createdAt) : null,
                }));
                setUsers(formattedData);
            } else {
                console.error('API response was not successful or does not contain a valid data array:', data);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);

    };


    useEffect(() => {
        fetchDataFromApi()
    }, [filterByObj, selectedOption]);


    const fetchDataFromApiis = (id) => {
        const url = `${apiUrl}/inventory/allocateProperty?id=&mobileNumber=&emailId=&inventoryId=${inventoryId}&applicantId=${id}&cancel=true`;

        fetch(url, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    if (Array.isArray(data.data)) {
                        setUsers4(data.data);
                        alert(data.message);
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
        fetchDataFromApiis()
    }, []);


    const fetchDataFromApii = (id) => {
        const url = `${apiUrl}/inventory/allocateProperty?id=&mobileNumber=&emailId=&inventoryId=${inventoryId}&applicantId=${id}`;

        fetch(url, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    if (Array.isArray(data.data)) {
                        setUsers3(data.data);
                        toast.success(data.message);
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
        fetchDataFromApii()
    }, []);


    const fetchDataFromApiii = (id) => {
        const url = `${apiUrl}/inventory/allocateProperty?id=&mobileNumber=&emailId=&inventoryId=${inventoryId}&applicantId=${id}`;

        fetch(url, {
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    if (Array.isArray(data.data)) {
                        setUsers4(data.data);
                        fetchDataFromApi()
                        toast.success(data.message);

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
        fetchDataFromApiii()
    }, []);


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
            setRefresh(!refresh);
            setFormData3(initialFormData);
            toast.success(response2.message);


        } catch (error) {
            toast.error(error.message);


        }
    };



    const handleFileChange = (e) => {
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

    const filteredUsers = users.filter((user) => {


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

                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">
                                        Inventory Check({inventoryCount})
                                    </h2>

                                </div>
                                <div className="d-flex align-items-center">
                                    <label
                                        className={`me-4 d-flex align-items-center ${selectedOption === 'false' ? 'selected' : ''}`}
                                    >
                                        <input
                                            type="radio"
                                            value="false"
                                            name="options"
                                            style={{ width: '20px', height: '20px', marginRight: '10px' }}
                                            checked={selectedOption === 'false'}
                                            onChange={handleRadioChange}
                                        />
                                        Provisional
                                    </label>
                                    <label
                                        className={`me-4 d-flex align-items-center ${selectedOption === 'true' ? 'selected' : ''}`}
                                    >
                                        <input
                                            type="radio"
                                            value="true"
                                            name="options"
                                            style={{ width: '20px', height: '20px', marginRight: '10px' }}
                                            checked={selectedOption === 'true'}
                                            onChange={handleRadioChange}
                                        />
                                        Approved
                                    </label>
                                    <Link
                                        to={`${apiUrl}/sample/sampleInventory.xlsx`}
                                        download
                                        type="button"
                                        className="btn btn-primary my-2 btn-icon-text me-2"
                                    >
                                        Download Inventory
                                    </Link>
                                    <button
                                        onClick={handleOpenModal4}
                                        type="button"
                                        className="btn btn-primary my-2 btn-icon-text me-2"
                                    >
                                        Upload Inventory
                                    </button>

                                </div>

                            </div>
                            {/* End Page Header */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card custom-card">
                                        <div className="card-body py-3">
                                            <div className="row">
                                                <div className="row">

                                                    <div className="col-sm-3">
                                                        <div ref={dropdownRef} style={{ position: "relative", width: "300px" }}>
                                                            {/* Dropdown Header */}
                                                            <div
                                                                style={{
                                                                    height: "35px",
                                                                    border: "1px solid #ccc",
                                                                    padding: "10px",
                                                                    cursor: "pointer",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "space-between",
                                                                    overflow: "hidden", // Prevent content overflow
                                                                    textOverflow: "ellipsis", // Show "..." if text is too long
                                                                    whiteSpace: "nowrap", // Keep the text on a single line
                                                                    borderRadius: "5px",
                                                                }}
                                                                onClick={() => setIsOpen((prev) => !prev)}
                                                            >
                                                                <span>
                                                                    {selectedIds
                                                                        ? project.find((item) => item.id === selectedIds)?.projectName || "Select project"
                                                                        : "Select project"}
                                                                </span>
                                                            </div>

                                                            {/* Dropdown Items */}
                                                            {isOpen && (
                                                                <div
                                                                    style={{
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "0",
                                                                        width: "100%",
                                                                        maxHeight: "200px",
                                                                        overflowY: "scroll",
                                                                        border: "1px solid #ccc",
                                                                        backgroundColor: "#fff",
                                                                        zIndex: 1000,
                                                                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                                                        borderRadius: "4px",
                                                                    }}
                                                                >
                                                                    {/* Default option */}
                                                                    <div
                                                                        style={{
                                                                            padding: "10px",
                                                                            cursor: "pointer",
                                                                            borderBottom: "1px solid #eee",
                                                                            backgroundColor: "#fff",
                                                                        }}
                                                                        onClick={() => {
                                                                            setSelectedIds(null);
                                                                            setFilterByObj((prev) => ({ ...prev, projectId: "" }));
                                                                            setIsOpen(false); // Close dropdown after selection
                                                                        }}
                                                                    >
                                                                        Select project
                                                                    </div>

                                                                    {/* Loop through project options */}
                                                                    {project
                                                                        .filter((option) => option.projectName && option.projectName !== "N/A")
                                                                        .map((option) => (
                                                                            <div
                                                                                key={option.id}
                                                                                style={{
                                                                                    padding: "10px",
                                                                                    cursor: "pointer",
                                                                                    borderBottom: "1px solid #eee",
                                                                                    backgroundColor: selectedIds === option.id ? "#f1f1f1" : "#fff",
                                                                                    transition: "background-color 0.2s ease-in-out",
                                                                                }}
                                                                                onClick={() => {
                                                                                    setSelectedIds(option.id);
                                                                                    setFilterByObj((prev) => ({ ...prev, projectId: option.id }));
                                                                                    setIsOpen(false); // Close dropdown after selection
                                                                                }}
                                                                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#f1f1f1")}
                                                                                onMouseLeave={(e) => (e.target.style.backgroundColor = selectedIds === option.id ? "#f1f1f1" : "#fff")}
                                                                            >
                                                                                {option.projectName}
                                                                            </div>
                                                                        ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-3">
                                                        <select className="form-control select2"
                                                            name="schemeType"
                                                            value={filterByObj.schemeType}
                                                            onChange={handleInputChange2}
                                                        >
                                                            <option value=''>Select Type</option>
                                                            {displayStatus.map((option, index) => (
                                                                <option key={option.id} value={option.name}>
                                                                    {option.name}
                                                                </option>
                                                            ))}

                                                        </select>
                                                    </div>



                                                    <div className="col-sm-3" >
                                                        <input
                                                            type="search"
                                                            className="form-control form-control"
                                                            placeholder="Search Unit No.."
                                                            aria-controls="example1"
                                                            name="unitNo"
                                                            value={filterByObj.unitNo}
                                                            onChange={handleInputChange2}


                                                        />
                                                    </div>
                                                    {/* <div className="col-sm-3" >
                                                        <input
                                                            type="search"
                                                            className="form-control form-control"
                                                            placeholder="Search Size Sqft.."
                                                            aria-controls="example1"
                                                            name="size"
                                                            value={filterByObj.size}
                                                            onChange={handleInputChange2}
                                                            style={{ marginTop: '10px' }}
                                                        />
                                                    </div> */}
                                                    {/* <div className="col-sm-3" >
                                                        <input
                                                            type="search"
                                                            className="form-control form-control"
                                                            placeholder="Search PLC..."
                                                            aria-controls="example1"
                                                            style={{ marginTop: '10px' }}
                                                            name="plc"
                                                            value={filterByObj.plc}
                                                            onChange={handleInputChange2}
                                                        />
                                                    </div> */}



                                                    <div className="col-sm-3" >
                                                        <select className="form-control select2"
                                                            name="luckyDrawStatus"
                                                            value={filterByObj.luckyDrawStatus}
                                                            onChange={handleInputChange2}>
                                                            <option value=''>LDUS</option>
                                                            <option>Available</option>
                                                            <option>Blocked</option>
                                                            <option>Allocated</option>
                                                        </select>
                                                    </div>
                                                    {/* <div className="col-sm-3" style={{ marginTop: '10px' }}>
                                                        <select className="form-control select2"
                                                            name="registry"
                                                            value={filterByObj.registry}
                                                            onChange={handleInputChange2}>
                                                            <option value=''>Registry</option>
                                                            <option>Done</option>
                                                            <option>Not Done</option>
                                                        </select>
                                                    </div> */}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                                    <table id="example-input" style={{ width: '100%', borderCollapse: 'collapse' }} className="table table-bordered text-nowrap">
                                                        <thead>
                                                            <tr>
                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                    fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                }}>Project</th>

                                                                {selectedOption !== 'false' && (
                                                                    <th style={{
                                                                        padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                        fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                    }}>Actual Project Name</th>
                                                                )}


                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                    fontWeight: 'bold', textAlign: 'left', minWidth: '5px'
                                                                }}>Type</th>

                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                    fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                }}>Unit No</th>
                                                                {selectedOption !== 'false' && (

                                                                    <th style={{
                                                                        padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                        fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                    }}>Actual Unit No</th>
                                                                )}

                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                    fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                }}>Size</th>

                                                                {selectedOption !== 'false' && (
                                                                    <th style={{
                                                                        padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                        fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                    }}>Actual Size </th>
                                                                )}
                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                    fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                }}>PLC</th>
                                                                {selectedOption !== 'false' && (
                                                                    <th style={{
                                                                        padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                        fontWeight: 'bold', textAlign: 'left', minWidth: '100px'
                                                                    }}>Actual PLC</th>
                                                                )}

                                                                {/* <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                 fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Super Ar</th>

                                                                <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                 fontWeight: 'bold', textAlign: 'left', minWidth: '100px' }}>Carpet</th> */}

                                                                {/* <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                 fontWeight: 'bold', textAlign: 'left', minWidth: '50px' }}>Status</th> */}


                                                                <th
                                                                    style={{
                                                                        padding: '8px',
                                                                        border: '1px solid #ddd',
                                                                        backgroundColor: '#f2f2f2',
                                                                        fontWeight: 'bold',
                                                                        textAlign: 'left',
                                                                        minWidth: '50px',
                                                                        cursor: 'pointer'
                                                                    }}
                                                                    title="Lucky draw updated status"
                                                                >
                                                                    LDUS
                                                                </th>




                                                                {/* <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', 
                                                                fontWeight: 'bold', textAlign: 'left', minWidth: '50px' }}>NOC</th> */}

                                                                {/* <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2',
                                                                 fontWeight: 'bold', textAlign: 'left', minWidth: '50px' }}>Registry</th> */}

                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold',
                                                                    textAlign: 'left', minWidth: '50px'
                                                                }}>Last Update</th>

                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold',
                                                                    textAlign: 'left', minWidth: '100px'
                                                                }}>Allocated To</th>

                                                                <th style={{
                                                                    padding: '8px', border: '1px solid #ddd', backgroundColor: '#f2f2f2', fontWeight: 'bold',
                                                                    textAlign: 'left', minWidth: '50px'
                                                                }}>Remark</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {users.map((user) => (
                                                                <tr>
                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                                        <select className="form-control" style={{ width: '100%' }}>
                                                                            <option>{user.projectName}</option>


                                                                        </select>
                                                                    </td>
                                                                    {selectedOption !== 'false' && (
                                                                        <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
                                                                            <select className="form-control" style={{ width: '100%' }}>
                                                                                <option>{user.ActualProjectName}</option>


                                                                            </select>

                                                                        </td>
                                                                    )}

                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '120px' }}>
                                                                        <select className="form-control select2" style={{ width: '100%' }}>
                                                                            <option >{user.type}</option>

                                                                        </select>
                                                                    </td>

                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                        <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={user.unitNo || 'N/A'} />
                                                                    </td>

                                                                    {selectedOption !== 'false' && (
                                                                        <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                            <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={user.ActualUnitNo || 'N/A'} />
                                                                        </td>
                                                                    )}
                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                        <input
                                                                            className="form-control input-sm"
                                                                            type="text"
                                                                            name="row-1-age"
                                                                            defaultValue={`${user.size} ${(user.type === 'Plot' || user.type === 'Farmhouse') ? 'SQ YD' :
                                                                                user.type === 'Shop' ? 'SQ FT' :
                                                                                    ''
                                                                                }`}
                                                                        />

                                                                    </td>
                                                                    {selectedOption !== 'false' && (
                                                                        <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                            <input
                                                                                className="form-control input-sm"
                                                                                type="text"
                                                                                name="row-1-age"
                                                                                defaultValue={`${user.ActualSize} ${(user.type === 'Plot' || user.type === 'Farmhouse') ? 'SQ YD' :
                                                                                    user.type === 'Shop' ? 'SQ FT' :
                                                                                        ''
                                                                                    }`}
                                                                            />

                                                                        </td>
                                                                    )}
                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                        <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={user.plc || 'N/A'} />
                                                                    </td>
                                                                    {selectedOption !== 'false' && (
                                                                        <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                            <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={user.ActualPlc || 'N/A'} />
                                                                        </td>
                                                                    )}
                                                                    {/* <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                        <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={user.superArea} />
                                                                    </td>
                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                        <input className="form-control input-sm" type="text" name="row-1-age" defaultValue={user.carpetArea} />
                                                                    </td> */}
                                                                    {/* <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>

                                                                        {user.status === 'Available' && (
                                                                            <>
                                                                                <span style={{ color: 'green' }}> {user.status}</span>
                                                                            </>
                                                                        )}
                                                                        {user.status === 'Allocated' && (
                                                                            <>
                                                                                <span style={{ color: 'red' }}> {user.status}</span>
                                                                            </>
                                                                        )}

                                                                    </td> */}
                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>

                                                                        {user.luckyDrawStatus === 'Available' && (
                                                                            <>
                                                                                <span style={{ color: 'green' }}>{user.luckyDrawStatus || 'N/A'}</span>
                                                                            </>
                                                                        )}
                                                                        {user.luckyDrawStatus === 'Allocated' && (
                                                                            <>
                                                                                <span style={{ color: 'red' }}>{user.luckyDrawStatus || 'N/A'}</span>
                                                                            </>
                                                                        )}

                                                                        {user.luckyDrawStatus === 'Awarded' && (
                                                                            <>
                                                                                <span style={{ color: 'orange' }}>{user.luckyDrawStatus || 'N/A'}</span>
                                                                            </>
                                                                        )}


                                                                    </td>
                                                                    {/* <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '70px', textAlign: 'center' }}>
                                                                        {user.NOC}
                                                                    </td> */}


                                                                    {/* <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '70px', textAlign: 'center' }}>
                                                                        {user.registration}
                                                                    </td> */}


                                                                    <td
                                                                        style={{
                                                                            padding: '8px',
                                                                            border: '1px solid #ddd',
                                                                            minWidth: '40px',
                                                                            fontFamily: 'Arial, sans-serif'
                                                                        }}
                                                                    >
                                                                        {user.formattedDate}
                                                                    </td>

                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '100px' }}>
                                                                        <input
                                                                            className="form-control input-sm"
                                                                            type="text"
                                                                            name="row-1-age"
                                                                            defaultValue={`${user.allocationCount} (Applicant)`}
                                                                            onClick={(e) => {
                                                                                if (user.id) {
                                                                                    setIsOpen2(user.id);
                                                                                    setInventoryId(user.id);
                                                                                }
                                                                            }}
                                                                        />


                                                                        {isOpen2 && (
                                                                            <div
                                                                                className="sidebar sidebar-right sidebar-animate sidebar-open"
                                                                                style={{
                                                                                    cursor: "pointer",
                                                                                    top: "140px",
                                                                                    bottom: "800px",
                                                                                    right: isOpen2 ? "0" : "-720px",
                                                                                    width: "700px",
                                                                                    backgroundColor: "#fff",
                                                                                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                                                                                    transition: "right 0.3s ease-in-out",
                                                                                }}
                                                                            >
                                                                                <div style={{ display: "flex", flexDirection: "column", height: "calc(100% - 70px)" }}>
                                                                                    <div
                                                                                        className="sidebar-header"
                                                                                        style={{
                                                                                            backgroundColor: "#f8f9fa",
                                                                                            padding: "20px",
                                                                                            borderBottom: "1px solid #ddd",
                                                                                            position: "relative",
                                                                                        }}
                                                                                    >
                                                                                        <h5 style={{ margin: "0", color: "#333" }}>Allocation Status</h5>
                                                                                        <button
                                                                                            onClick={() => setIsOpen2(false)}
                                                                                            style={{
                                                                                                border: "none",
                                                                                                background: "none",
                                                                                                color: "#999",
                                                                                                fontSize: "24px",
                                                                                                cursor: "pointer",
                                                                                                position: "absolute",
                                                                                                top: "20px",
                                                                                                right: "20px",
                                                                                            }}
                                                                                        >
                                                                                            &times;
                                                                                        </button>
                                                                                    </div>

                                                                                    <div className="sidebar-body" style={{ flex: "1", padding: "20px" }}>
                                                                                        <div className="table-responsive">
                                                                                            <table className="table table-striped table-bordered text-nowrap mb-5">
                                                                                                <thead>
                                                                                                    <tr>
                                                                                                        <th>Unit</th>
                                                                                                        <th>Allocated To</th>
                                                                                                        <th>Payment</th>
                                                                                                        <th>Actions</th>
                                                                                                    </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                    {users2.map((user, index) => (
                                                                                                        <tr key={index}>
                                                                                                            <td>
                                                                                                                Unit No: {user?.unitNo}
                                                                                                                <br />
                                                                                                                Size: {user?.size}
                                                                                                                <br />
                                                                                                                PLC: {user?.PLCs}
                                                                                                            </td>
                                                                                                            <td>
                                                                                                                {user?.applicantFirstName} {user?.applicantMiddleName} {user?.applicantLastName}
                                                                                                                <br />
                                                                                                                CID: {user?.id}
                                                                                                                <br />
                                                                                                                Ticket Id: {user?.ticketId}
                                                                                                                <br />
                                                                                                                Date: {user?.formattedDates}
                                                                                                                <br />
                                                                                                                {user?.days}
                                                                                                                <br />
                                                                                                                Status: <span>{user?.stage}</span>
                                                                                                            </td>
                                                                                                            <td>
                                                                                                                Total: {user?.totalCost || 'N/A'}
                                                                                                                <br />
                                                                                                                Paid: {user?.registrationAmount}
                                                                                                                <br />
                                                                                                                Due: {user?.totalCost - user?.registrationAmount}
                                                                                                                <br />
                                                                                                                Payment Plan: {user?.paymentPlan}
                                                                                                            </td>
                                                                                                            <td style={{ textAlign: "center" }}>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                                                    style={{
                                                                                                                        backgroundColor: "green",
                                                                                                                        color: "white",
                                                                                                                        border: "none",
                                                                                                                    }}
                                                                                                                >
                                                                                                                    Allocated
                                                                                                                </button>
                                                                                                                <br />
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                                                    style={{
                                                                                                                        backgroundColor: "red",
                                                                                                                        color: "white",
                                                                                                                        border: "none",
                                                                                                                    }}
                                                                                                                >
                                                                                                                    Cancel
                                                                                                                </button>
                                                                                                                <br />
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn ripple btn-info btn-xs w-100 mb-1"
                                                                                                                    onClick={() => {
                                                                                                                        if (user?.id) {
                                                                                                                            fetchDataFromApiii(user?.id);
                                                                                                                        }
                                                                                                                    }}
                                                                                                                >
                                                                                                                    Reallocated
                                                                                                                </button>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    ))}
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}



                                                                    </td>

                                                                    <td style={{ padding: '8px', border: '1px solid #ddd', minWidth: '400px' }}>
                                                                        <textarea
                                                                            className="form-control"
                                                                            name="row-1-comments"
                                                                            rows={1}
                                                                            defaultValue={user.remark}
                                                                        />
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


                <div
                    className={`modal fade ${isModalOpen16 ? 'show d-block' : ''}`}
                    id="modaldemo-callback-form"
                    tabIndex="-1"
                    style={{
                        display: isModalOpen16 ? 'flex' : 'none', top: '60px', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', top: 0,
                        left: 0, right: 0, bottom: 0,
                    }}
                >
                    <div
                        className="modal-dialog modal-dialog-centered"
                        style={{

                            maxWidth: '49000px',

                        }}
                    >
                        <div
                            className="modal-content"
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                                overflow: 'hidden',
                                backgroundColor: '#fff'
                            }}
                        >
                            <div
                                className="modal-header"
                                style={{
                                    backgroundColor: '#f8f9fa',
                                    borderBottom: '1px solid #dee2e6',
                                    padding: '15px 20px'
                                }}
                            >
                                <h5 className="modal-title" style={{ margin: 0 }}>Allocation</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal16}
                                    aria-label="Close"
                                    style={{ outline: 'none', cursor: 'pointer' }}
                                ></button>
                            </div>

                            <div className="modal-body" style={{ padding: '10px' }}>
                                <form>
                                    <div className="row row-sm">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="card custom-card main-content-body-profile">
                                                <div
                                                    style={{
                                                        overflowX: 'auto',
                                                        maxWidth: '800%',
                                                        display: 'block',
                                                        scrollbarWidth: 'thin',
                                                    }}
                                                >
                                                    <table
                                                        align="center"
                                                        width="100%"
                                                        style={{
                                                            borderCollapse: 'collapse',
                                                            border: '1px solid #fcfcfc',
                                                            marginBottom: '20px',
                                                        }}
                                                    >
                                                        <thead>
                                                            <tr style={{ backgroundColor: '#f2f2f2' }}>
                                                                <th
                                                                    style={{
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '120px',
                                                                        padding: '5px',
                                                                        whiteSpace: 'nowrap',
                                                                    }}
                                                                >
                                                                    Client
                                                                </th>
                                                                <th
                                                                    style={{
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '120px',
                                                                        padding: '5px',
                                                                        whiteSpace: 'nowrap',
                                                                    }}
                                                                >
                                                                    Unit
                                                                </th>
                                                                <th
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '120px',
                                                                        whiteSpace: 'nowrap'
                                                                    }}
                                                                >
                                                                    Area
                                                                </th>
                                                                <th
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '200px',
                                                                    }}
                                                                >
                                                                    Plan
                                                                </th>
                                                                <th
                                                                    style={{
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '150px',
                                                                    }}
                                                                >
                                                                    BSP
                                                                </th>
                                                                <th
                                                                    style={{
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '150px',
                                                                    }}
                                                                >
                                                                    EDC/IDC
                                                                </th>
                                                                <th
                                                                    style={{
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '200px',
                                                                    }}
                                                                >
                                                                    PLC
                                                                </th>
                                                                <th
                                                                    style={{
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '200px',
                                                                    }}
                                                                >
                                                                    Total
                                                                </th>
                                                                <th
                                                                    style={{
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        width: '200px',
                                                                    }}
                                                                >
                                                                    Gift
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        whiteSpace: 'nowrap'
                                                                    }}
                                                                >
                                                                    {employee2.applicantFirstName || 'N/A'} {employee2.applicantLastName || 'N/A'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {employee.unitNo || 'N/A'}
                                                                    <br />
                                                                    {employee.type || 'N/A'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {employee.size || 'N/A'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {employee2.paymentPlan || 'N/A'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {employee2?.plan?.basicPriceFPP || 'N/A'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {employee2?.plan?.fixedCharges || 'N/A'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                        whiteSpace: 'nowrap',
                                                                    }}
                                                                >
                                                                    <select
                                                                        className="form-control select select2"
                                                                        name="PLCs"
                                                                        value={formData9.PLCs}
                                                                        onChange={handleInputChange9}
                                                                        style={{
                                                                            marginLeft: '6px',
                                                                            width: '100%',
                                                                        }}
                                                                    >
                                                                        <option value="">Select</option>
                                                                        {plc.map((option) => (
                                                                            <option key={option.id} value={option.name}>
                                                                                {option.name}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {total1 || '0.00'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '5px',
                                                                        border: '1px solid #ccc',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                        <select
                                                                            className="form-control select select2"
                                                                            name="gift"
                                                                            value={formData9.gift}
                                                                            onChange={handleInputChange9}
                                                                            style={{
                                                                                marginBottom: '5px',
                                                                                width: '100%',
                                                                            }}
                                                                        >
                                                                            <option value="">Select</option>
                                                                            {gift.map((option) => (
                                                                                <option key={option.id} value={option.id}>
                                                                                    {option.giftName}
                                                                                </option>
                                                                            ))}
                                                                            <option value="other">Other</option>
                                                                        </select>
                                                                        {formData9.gift === 'other' && (
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Enter other gift"
                                                                                name="otherGift"
                                                                                value={formData9.otherGift}
                                                                                onChange={handleInputChange9}
                                                                                style={{
                                                                                    width: '100%',
                                                                                }}
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <td
                                                                    colSpan={4}
                                                                    style={{
                                                                        padding: '10px',
                                                                        border: '1px solid #ccc',
                                                                        fontWeight: 'bold',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    All Total
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '10px',
                                                                        border: '1px solid #ccc',
                                                                        fontWeight: 'bold',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {total1 || '0.00'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '10px',
                                                                        border: '1px solid #ccc',
                                                                        fontWeight: 'bold',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {total5 || '0.00'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '10px',
                                                                        border: '1px solid #ccc',
                                                                        fontWeight: 'bold',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {total2 || '0.00'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '10px',
                                                                        border: '1px solid #ccc',
                                                                        fontWeight: 'bold',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {total6 || '0.00'}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        padding: '10px',
                                                                        border: '1px solid #ccc',
                                                                        fontWeight: 'bold',
                                                                        textAlign: 'center',
                                                                    }}
                                                                >
                                                                    {/* Empty cell for balance */}
                                                                    &nbsp;
                                                                </td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div
                                className="modal-footer"
                                style={{
                                    borderTop: '1px solid #dee2e6',
                                    padding: '15px 20px',
                                    backgroundColor: '#f8f9fa'
                                }}
                            >
                                <button
                                    className="btn ripple btn-primary"
                                    type="button"
                                    onClick={handleSubmit}
                                    style={{
                                        borderRadius: '5px',
                                        padding: '8px 20px',
                                        fontSize: '14px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Allocate
                                </button>
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
                                    Copyright © 2024 <a href="javascript:void(0)">Caasaa</a>. Designed
                                    by <a href="http://webkype.com/">Webkype.com</a> All rights
                                    reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Footer*/}
            </div >

        </>

    )
}

export default InventoryChecks

