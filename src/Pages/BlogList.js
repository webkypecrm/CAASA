import React, { useState, useEffect } from "react";
import Prince from "../Components/Prince";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopHeader from "../Components/TopHeader";

function BlogList() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("")
    const [loading, setLoading] = useState(true);
    const [filterByObj, setFilterByObj] = useState({
        search: '',

    });
    const Token = localStorage.getItem("Token");
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_URL;


    const loadContent = (id) => {
        navigate(`/edit-blog/${id}`);
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


    const deleteContent = (id) => {
        fetch(`${apiUrl}/blog/deleteBlog?id=${id}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${Token}`,
            }
        })
            .then((res) => {
                if (res.ok) {
                    fetchDataFromApi();
                    toast.success("Blog deleted successfully");
                } else {
                    throw new Error('Failed to delete');
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };



    const fetchDataFromApi = () => {
        setLoading(true);
        fetch(`${apiUrl}/blog/getBlogList?search=${filterByObj.search}`, {
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success") {
                    if (Array.isArray(data.data)) {
                        setUsers(data.data);
                    } else {
                        console.error("API response does not contain users array:", data);
                    }
                } else {
                    console.error("API request was not successful:", data);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
        setLoading(false);
    }
    useEffect(() => {
        fetchDataFromApi()
    }, [filterByObj.search]);


    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFilterByObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideIn {
            from { transform: translateY(-300px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes btnFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
        document.head.appendChild(styleSheet);
    }, []);



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
                                        Blog List
                                    </h2>

                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <Link
                                            to='/blog'
                                            className="btn btn-primary my-2 btn-icon-text"
                                            type="button"
                                        >
                                            {" "}
                                            <i className="fe fe-plus me-2" />
                                            Add Blog
                                        </Link>
                                    </div>
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
                                                        placeholder="Search ID,Category,Title..."
                                                        aria-controls="example1"
                                                        name="search"
                                                        value={filterByObj.search}
                                                        onChange={handleInputChange2}

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
                                                    <table className="table table-striped table-bordered text-nowrap mb-0 ">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Blog category</th>
                                                                <th>Blog Title</th>
                                                                <th>Photo</th>
                                                                <th> Action </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {users.map((user) => (
                                                                <tr key={user.id}>
                                                                    <td>{user.id}</td>
                                                                    <td>
                                                                        {user.category}
                                                                    </td>
                                                                    <td>
                                                                        {user.title}
                                                                    </td>

                                                                    <td>
                                                                        Banner: <Link to={user.banner} title="Photo 1" target="__blank"><i className="fe fe-eye" style={{ cursor: 'pointer' }} /></Link>
                                                                        {/* <br />

                                                                        Video: <Link to={user.videoLink} title="Video" target="__blank"><i className="fe fe-eye" style={{ cursor: 'pointer' }} /></Link> */}
                                                                    </td>
                                                                    <td>
                                                                        <button className="btn btn-sm btn-info me-2" onClick={() => loadContent(user.id)}>
                                                                            <span className="fe fe-edit"></span>
                                                                        </button>
                                                                        <button className="btn btn-sm btn-danger" onClick={() => deleteContent(user.id)}>
                                                                            <span className="fe fe-trash-2"></span>
                                                                        </button>
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
                                    Copyright © 2024 <a href="javascript:void(0)">Caasaa</a>.
                                    Designed by <a href="http://webkype.com/">Webkype.com</a> All
                                    rights reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Footer*/}
            </div>



        </>
    );
}

export default BlogList


