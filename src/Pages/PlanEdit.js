import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlanEdit = () => {

    const [project, setProject] = useState([]);
    const [company, setCompany] = useState([]);
    const { empid } = useParams();
    const navigate = useNavigate();
    const initialFormData = {
        profilePhoto: '',
        companyName: '',
        companyEmail: '',
        companyPhone: '',
        companyWebsite: '',
        contactName: '',
        contactEmail: '',
        contactMobile: '',
        GST: '',
        alternateMobileNo: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [profilePicFile, setProfilePicFile] = useState(null);
    const [profilePic, setProfilePic] = useState(null);
    const apiUrl = process.env.REACT_APP_URL;
    const Token = localStorage.getItem("Token");

    // company data get
    useEffect(() => {
        const fetchUser = async () => {

            try {
                const url = `${apiUrl}/company/getCompanyById/${empid}`;
                let result = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                        'Content-Type': 'application/json',
                    },
                });

                result = await result.json();
                const { data } = result;
                // console.log('Fetched Data:', data);
                const photo = data.profilePhoto;
                setProfilePic(photo)
                setFormData((prevFormData) => ({
                    ...prevFormData,

                    profilePhoto: data.profilePhoto,
                    companyName: data.companyName,
                    companyEmail: data.companyEmail,
                    companyPhone: data.companyPhone,
                    companyWebsite: data.companyWebsite,
                    contactName: data.contactName,
                    contactEmail: data.contactEmail,
                    contactMobile: data.contactMobile,
                    GST: data.GST,
                    alternateMobileNo: data.alternateMobileNo,
                }));

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUser();
    }, []);

    const handleFileChange = (e) => {
        const files = e.target.files;
    
        if (files.length > 0) {
          const profilePicFile = files[0];
    
          if (profilePicFile.type.startsWith('image/')) {
            const imageUrl = URL.createObjectURL(profilePicFile); // Convert file to URL
            setProfilePic(imageUrl); // Set URL as profilePic
            setFormData((prevData) => ({
              ...prevData,
              profilePhoto: profilePicFile,
            }));
    
          }
        } else {
          console.log('No file selected');
        }
      };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }


    //company
    useEffect(() => {
        const Token = localStorage.getItem('Token');

        fetch(`${apiUrl}/company/companyDropdown`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setCompany(data.data);
                } else {
                    console.error('API response does not contain an array:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching gender options:', error);
            });
    }, []);
    //project api 
    useEffect(() => {
        fetch(`${apiUrl}/project/getAllProjectDropdown`)
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

    return (
        <>



            <div className="page">
                <TopHeader />
                <Prince />

                {/* Main Content*/}
                <div className="main-content  pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Row */}
                            <div className="row row-sm mt-5  justify-content-around">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div>
                                                <h6 className="main-content-label mb-3"> Payment Plan</h6>
                                            </div>
                                            <form action="#" data-parsley-validate="">
                                                <div className="">
                                                    <div className="row row-sm">
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Select Company{" "}
                                                                <span className="tx-danger">*</span>
                                                            </label>
                                                            <select className="form-control">
                                                                <option value="Firefox">Select Company</option>
                                                                {company.map((option, index) => (
                                                                    <option key={option.id} value={option.id}>
                                                                        {option.companyName}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Select Project <span className="tx-danger">*</span>
                                                            </label>
                                                            <select className="form-control">
                                                                <option value="">Select</option>
                                                                {project.map((option, index) => (
                                                                    <option key={option.id} value={option.id}>
                                                                        {option.projectName}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-4 form-group">
                                                            <label className="form-label">
                                                                Select Scheme <span className="tx-danger">*</span>
                                                            </label>
                                                            <select className="form-control">
                                                                <option value="Firefox">Select</option>
                                                                <option value="Firefox">Plot</option>
                                                                <option value="Firefox">Flat</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-12 form-group">
                                                            <label className="form-label">
                                                                Plan Description{" "}
                                                                <span className="tx-danger">*</span>
                                                            </label>
                                                            <textarea
                                                                className="form-control"
                                                                name="lastname"
                                                                placeholder="Description"
                                                                required=""
                                                                style={{ height: "100px !important" }}
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Brocehure Image <span className="tx-danger">*</span>
                                                            </label>
                                                            <div className="row row-sm">
                                                                <div className="col-sm-12 col-md-12">
                                                                    <input
                                                                        type="file"
                                                                        className="dropify"
                                                                        data-default-file="../assets/img/media/1.jpg"
                                                                        data-height={200}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 form-group">
                                                            <label className="form-label">
                                                                Payment Plan Image{" "}
                                                                <span className="tx-danger">*</span>
                                                            </label>
                                                            <div className="row row-sm">
                                                                <div className="col-sm-12 col-md-12">
                                                                    <input
                                                                        type="file"
                                                                        className="dropify"
                                                                        data-default-file="../assets/img/media/1.jpg"
                                                                        data-height={200}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 ">
                                                            <a href="" className="btn btn-primary" type="submit">
                                                                Submit
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Row */}
                            {/* Row */}
                            <div className="row row-sm mt-5 justify-content-around">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-invoice table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td width="30%">
                                                                <img
                                                                    src="https://amrealty.webkype.com/assets/img/brand/logo.png"
                                                                    style={{ width: 150 }}
                                                                />
                                                            </td>
                                                            <td width="36%">
                                                                <h4>AM Maple Residency-2 Phase-2 </h4>
                                                            </td>
                                                            <td width="33%">
                                                                <h4
                                                                    style={{
                                                                        textAlign: "center",
                                                                        background: "#6c8cc8",
                                                                        color: "#fff",
                                                                        fontWeight: "normal",
                                                                        padding: 10,
                                                                        borderRadius: 10
                                                                    }}
                                                                >
                                                                    Payment Plan
                                                                </h4>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <h4
                                                    className="mt-5 text-center mb-3"
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
                                                                    style={{ width: 90, display: "inline" }}
                                                                />{" "}
                                                                per Sq. Yd.
                                                            </th>
                                                            <th className="tx-left" />
                                                            <th className="tx-left">
                                                                Installment Amount for 100 sq.yd{" "}
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">1</td>
                                                            <td className="tx-left">On Booking</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">2</td>
                                                            <td className="tx-left">
                                                                Within 24 Months. Monthly installment Each of:-
                                                            </td>
                                                            <td className="tx-left" />
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left" />
                                                            <td className="tx-left">Total value</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <h4
                                                    className="mt-5 text-center mb-3"
                                                    style={{ color: "#2e3192" }}
                                                >
                                                    POSSESSION LINK PLAN
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
                                                                    style={{ width: 90, display: "inline" }}
                                                                />{" "}
                                                                per Sq. Yd.
                                                            </th>
                                                            <th className="tx-left" />
                                                            <th className="tx-left">
                                                                Installment Amount for 100 sq.yd{" "}
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">1</td>
                                                            <td className="tx-left">On Booking</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">2</td>
                                                            <td className="tx-left">Within 60 Days-</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">3</td>
                                                            <td className="tx-left">Within 90 Days</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">4</td>
                                                            <td className="tx-left">Within 120 Days</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">5</td>
                                                            <td className="tx-left">Within 150 Days</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">6</td>
                                                            <td className="tx-left">Within 180 Days</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">7</td>
                                                            <td className="tx-left">Rest on Registry</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">8</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">9</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">10</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left" />
                                                            <td className="tx-left"> </td>
                                                            <td className="tx-left"> </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <h4
                                                    className="mt-5 text-center mb-3"
                                                    style={{ color: "#2e3192" }}
                                                >
                                                    DOWN LINK PLAN
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
                                                                    style={{ width: 90, display: "inline" }}
                                                                />{" "}
                                                                per Sq. Yd.
                                                            </th>
                                                            <th className="tx-left" />
                                                            <th className="tx-left">
                                                                Installment Amount for 100 sq.yd{" "}
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">1</td>
                                                            <td className="tx-left">On Booking</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">2</td>
                                                            <td className="tx-left">Within 30 Days-</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left">3</td>
                                                            <td className="tx-left">Rest on Registry</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                        <tr style={{ background: "#d6f6ff26" }}>
                                                            <td className="tx-left" />
                                                            <td className="tx-left">Total Value</td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                            <td className="tx-left">
                                                                <input type="text" className="form-control" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p className="mt-5">
                                                    <b>Note:</b>
                                                    <br />
                                                    1. IDC &amp; EDC charges ` 150/- per Sq. Yd. for plot.
                                                    <br />
                                                    2. PLC determined by the company shall be charged extra,
                                                    There will be three type of PLC's (1) Corner ,(2) Main
                                                    Road (3) Park Facing/Facility will be charged
                                                    proportionately at 8%, 12%, 15% respectively.
                                                    <br />
                                                    3. Registration charges, Stamp Duty, and Service tax will
                                                    be paid extra as per applicable rate.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer text-end">
                                            <a href="po-rice.html" className="btn btn-primary mb-1">
                                                Submit
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Row */}
                        </div>
                    </div>
                </div>
                {/* End Main Content*/}
            </div>

        </>
    )
}

export default PlanEdit