import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ProjectEdit = () => {

  const { empid } = useParams();
  const navigate = useNavigate();

  const initialFormData = {
    locationId: '',
    projectName: '',
    status: '',
    banner: '',
    details: '',
    noOfPlot: '',
    noOfShop: '',
    noOfFarmHouse: '',

    areaAllocateToProject: '',
    areaAvailableForProject: '',
    size: '',



    brochure: '',
    videoLink: '',
    photo1: '',
    photo2: '',
    photo3: '',
    photo4: '',
    photo5: '',
    photo6: '',
    photo7: '',
    photo8: '',
    photo9: '',
    photo10: '',

    bannerWebsite: '',
    photo1Website: '',
    photo2Website: '',
    photo3Website: '',
    photo4Website: '',
    photo5Website: '',
    photo6Website: '',
    photo7Website: '',
    photo8Website: '',
    photo9Website: '',
    photo10Website: '',

    googleMapLink: '',
    longitude: '',
    latitude: '',
    companyId: '',
    // bankAccountId: '',
    constructionDateStart: '',
    constructionDateEnd: '',
    // constructionPic1: '',
    // constructionPic2: '',
    // constructionPic3: '',
    // constructionPic4: '',
    // constructionPic5: '',
    // constructionPic6: '',
    // localityInfo: ''

  };

  const [formData, setFormData] = useState(initialFormData);
  const [profilePic, setProfilePic] = useState(null);
  const [location, setLocation] = useState([]);
  const [status, setStatus] = useState([]);
  const [profilePicFile1, setProfilePicFile1] = useState(null);
  const [profilePicFile2, setProfilePicFile2] = useState(null);
  const [profilePicFile3, setProfilePicFile3] = useState(null);
  const [profilePicFile4, setProfilePicFile4] = useState(null);
  const [profilePicFile5, setProfilePicFile5] = useState(null);
  const [profilePicFile6, setProfilePicFile6] = useState(null);
  const [profilePicFile7, setProfilePicFile7] = useState(null);
  const [profilePicFile8, setProfilePicFile8] = useState(null);
  const [profilePicFile9, setProfilePicFile9] = useState(null);
  const [profilePicFile10, setProfilePicFile10] = useState(null);
  const [profilePicFile11, setProfilePicFile11] = useState(null);
  const [constructionPic1, setConstructionPic1] = useState(null);
  const [constructionPic2, setConstructionPic2] = useState(null);
  const [constructionPic3, setConstructionPic3] = useState(null);
  const [constructionPic4, setConstructionPic4] = useState(null);
  const [constructionPic5, setConstructionPic5] = useState(null);
  const [constructionPic6, setConstructionPic6] = useState(null);
  const [company, setCompany] = useState([]);


  const [bannerWebsite, setBannerWebsite] = useState(null);
  const [photo1Website, setPhoto1Website] = useState(null);
  const [photo2Website, setPhoto2Website] = useState(null);
  const [photo3Website, setPhoto3Website] = useState(null);
  const [photo4Website, setPhoto4Website] = useState(null);
  const [photo5Website, setPhoto5Website] = useState(null);
  const [photo6Website, setPhoto6Website] = useState(null);
  const [photo7Website, setPhoto7Website] = useState(null);
  const [photo8Website, setPhoto8Website] = useState(null);
  const [photo9Website, setPhoto9Website] = useState(null);
  const [photo10Website, setPhoto10Website] = useState(null);


  const [youtubeUrl, setYoutubeUrl] = useState('');
  // const [bank, setBank] = useState([]);


  const Token = localStorage.getItem("Token");
  const apiUrl = process.env.REACT_APP_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      if (!formData.locationId) return;

      try {
        const url = `${apiUrl}/location/getLocation/${formData.locationId}`;
        let result = await fetch(url, {
          headers: {
            Authorization: `Bearer ${Token}`,
            'Content-Type': 'application/json',
          },
        });

        result = await result.json();
        const { data } = result;

        setFormData((prevFormData) => ({
          ...prevFormData,

          areaAllocateToProject: data.areaAllocateToProject || '',
          areaAvailableForProject: data.areaAvailableForProject || '',
          size: data.size || '',


        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUsers();
  }, [formData.locationId, apiUrl, Token]);


  const getCurrentDate = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };


  // const handleInputChangeTextAreaLoacality = (value) => {
  //   setFormData({  localityInfo: value });
  // };

  // location data get
  useEffect(() => {
    const fetchUser = async () => {

      try {
        const url = `${apiUrl}/project/getProject/${empid}`;
        let result = await fetch(url, {
          headers: {
            Authorization: `Bearer ${Token}`,
            'Content-Type': 'application/json',
          },
        });

        result = await result.json();
        const { data } = result;

        const photo = data?.banner;
        setProfilePic(photo)
        setProfilePicFile1(data?.brochure);
        setProfilePicFile2(data?.photo1)
        setProfilePicFile4(data?.photo3)
        setProfilePicFile3(data?.photo2)
        setProfilePicFile5(data?.photo4)
        setProfilePicFile6(data?.photo5)
        setProfilePicFile7(data?.photo6)
        setProfilePicFile8(data?.photo7)
        setProfilePicFile9(data?.photo8)
        setProfilePicFile10(data?.photo9)
        setProfilePicFile11(data?.photo10)
        setConstructionPic1(data?.constructionPic1)
        setConstructionPic2(data?.constructionPic2)
        setConstructionPic3(data?.constructionPic3)
        setConstructionPic4(data?.constructionPic4)
        setConstructionPic5(data?.constructionPic5)
        setConstructionPic6(data?.constructionPic6)
        setBannerWebsite(data?.bannerWebsite)
        setPhoto1Website(data?.photo1Website)
        setPhoto2Website(data?.photo2Website)
        setPhoto3Website(data?.photo3Website)
        setPhoto4Website(data?.photo4Website)
        setPhoto5Website(data?.photo5Website)
        setPhoto6Website(data?.photo6Website)
        setPhoto7Website(data?.photo7Website)
        setPhoto8Website(data?.photo8Website)
        setPhoto9Website(data?.photo9Website)
        setPhoto10Website(data?.photo10Website)
        setYoutubeUrl(data.videoLink);
        setFormData((prevFormData) => ({
          ...prevFormData,
          locationId: data?.locationId,
          projectName: data?.projectName,
          status: data.status,
          banner: data.banner,
          details: data.details,
          noOfPlot: data.noOfPlot,
          noOfShop: data.noOfShop,
          noOfFarmHouse: data.noOfFarmHouse,


          brochure: data.brochure,
          videoLink: data.videoLink,
          photo1: data.photo1,
          photo2: data.photo2,
          photo3: data.photo3,
          photo4: data.photo4,
          photo5: data.photo5,
          photo6: data.photo6,
          photo7: data.photo7,
          photo8: data.photo8,
          photo9: data.photo9,
          photo10: data.photo10,


          bannerWebsite: data.bannerWebsite,
          photo1Website: data.photo1Website,
          photo2Website: data.photo2Website,
          photo3Website: data.photo3Website,
          photo4Website: data.photo4Website,
          photo5Website: data.photo5Website,
          photo6Website: data.photo6Website,
          photo7Website: data.photo7Website,
          photo8Website: data.photo8Website,
          photo9Website: data.photo9Website,
          photo10Website: data.photo10Website,

          areaAllocateToProject: data.areaAllocateToProject,
          areaAvailableForProject: data.areaAvailableForProject,
          size: data.size,
          googleMapLink: data.googleMapLink,

          longitude: data.longitude,
          latitude: data.latitude,
          companyId: data.companyId,

          constructionDateStart: data.constructionDateStart,
          constructionDateEnd: data.constructionDateEnd,
          constructionPic1: data.constructionPic1,
          constructionPic2: data.constructionPic2,
          constructionPic3: data.constructionPic3,
          constructionPic4: data.constructionPic4,
          constructionPic5: data.constructionPic5,
          constructionPic6: data.constructionPic6,
          localityInfo: data.localityInfo
        }));

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUser();
  }, []);




  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }



  // useEffect(() => {
  //   fetch(`${apiUrl}/bank/accountDropdown`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.data && Array.isArray(data.data)) {
  //         setBank(data.data);
  //       } else {
  //         console.error('API response is not in the expected format for countries.');
  //       }

  //     })
  //     .catch((error) => {
  //       console.error('Error fetching country data:', error);
  //     });
  // }, []);
  // location update

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      }

      const response = await fetch(`${apiUrl}/project/updateProject/${empid}`, {
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

      setFormData(initialFormData);
      toast.success(response2.message);
      navigate("/list-projects");
    } catch (error) {
      toast.error(error.message);

    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile = files[0];

      if (profilePicFile.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(profilePicFile);
        setProfilePic(imageUrl);
        setFormData((prevData) => ({
          ...prevData,
          banner: profilePicFile,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };




  const handleFileChange2 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile2 = files[0];

      if (profilePicFile2.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(profilePicFile2);
        setProfilePicFile2(imageUrl);
        setFormData((prevData) => ({
          ...prevData,
          photo1: profilePicFile2,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };



  const handleFileChange3 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile3 = files[0];

      if (profilePicFile3.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(profilePicFile3);
        setProfilePicFile3(imageUrl);
        setFormData((prevData) => ({
          ...prevData,
          photo2: profilePicFile3,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChange4 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile4 = files[0];

      if (profilePicFile4.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(profilePicFile4);
        setProfilePicFile4(imageUrl);
        setFormData((prevData) => ({
          ...prevData,
          photo3: profilePicFile4,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };



  const handleFileChange5 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile5 = files[0];

      if (profilePicFile5.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(profilePicFile5);
        setProfilePicFile5(imageUrl);
        setFormData((prevData) => ({
          ...prevData,
          photo4: profilePicFile5,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };

  const getYoutubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const handleUrlChange = (e) => {
    const url = e.target.value;

    // Basic validation to check if it's a YouTube URL
    const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;

    if (youtubeRegex.test(url)) {
      setYoutubeUrl(url);

      // Store the YouTube URL in formData
      setFormData((prevData) => ({
        ...prevData,
        videoLink: url,
      }));
    } else {
      // Reset the video URL if the input is invalid
      setYoutubeUrl('');
      setFormData((prevData) => ({
        ...prevData,
        videoLink: '', // Clear the video link in formData
      }));
      console.log('Invalid YouTube URL');
    }
  };





  const handleFileChange23 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile = files[0];

      if (profilePicFile.type.startsWith('image/')) {


        setFormData((prevData) => ({
          ...prevData,
          brochure: profilePicFile,
        }));
      } else if (profilePicFile.type === 'application/pdf') {
        // Assuming other file inputs exist for these file types
        setFormData((prevData) => ({
          ...prevData,
          brochure: profilePicFile,

        }));


      } else {
        console.log('Unsupported file type');
      }
    } else {
      console.log('No file selected');
    }
  };


  const handleFileChange24 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile = files[0];

      if (profilePicFile.type.startsWith('image/')) {


        setFormData((prevData) => ({
          ...prevData,
          projectMap: profilePicFile,
        }));
      } else if (profilePicFile.type === 'application/pdf') {
        // Assuming other file inputs exist for these file types
        setFormData((prevData) => ({
          ...prevData,
          projectMap: profilePicFile,

        }));


      } else {
        console.log('Unsupported file type');
      }
    } else {
      console.log('No file selected');
    }
  };



  //location 
  useEffect(() => {
    fetch(`${apiUrl}/location/locationDropdown`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${Token}`

      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.data)) {
          setLocation(data.data);
        } else {
          console.error('API response does not contain an array:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching gender options:', error);
      });
  }, []);

  //status master
  useEffect(() => {

    fetch(`${apiUrl}/master/getAllMasterData/13`, {
      headers: {
        Authorization: `Bearer ${Token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.data)) {
          setStatus(data.data);
        } else {
          console.error('API response does not contain an array:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching gender options:', error);
      });
  }, []);

  const handleInputChangeNumber = (event) => {
    const { name, value } = event.target;

    // Regular expression to allow only numeric input
    const numericValue = value.replace(/[^0-9]/g, '');

    if (value !== numericValue) {
      alert('Please enter only numbers!');
    }

    // Update the form data with the numeric value only  
    setFormData((prevData) => ({
      ...prevData,
      [name]: numericValue,
    }));
  };



  const handleFileChange6 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile51 = files[0];

      if (profilePicFile51.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(profilePicFile51);
        setProfilePicFile6(imageUrl);
        setFormData((prevData) => ({
          ...prevData,
          photo5: profilePicFile51,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };


  const handleFileChange7 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile52 = files[0];

      if (profilePicFile52.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(profilePicFile52);
        setProfilePicFile7(imageUrl);
        setFormData((prevData) => ({
          ...prevData,
          photo6: profilePicFile52,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };


  const handleFileChange8 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile53 = files[0];

      if (profilePicFile53.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(profilePicFile53);
        setProfilePicFile8(imageUrl);
        setFormData((prevData) => ({
          ...prevData,
          photo7: profilePicFile53,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };



  const handleFileChange9 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile54 = files[0];

      if (profilePicFile54.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(profilePicFile54);
        setProfilePicFile9(imageUrl);
        setFormData((prevData) => ({
          ...prevData,
          photo8: profilePicFile54,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChange10 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile55 = files[0];

      if (profilePicFile55.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(profilePicFile55);
        setProfilePicFile10(imageUrl);
        setFormData((prevData) => ({
          ...prevData,
          photo9: profilePicFile55,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };


  const handleFileChange11 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const profilePicFile56 = files[0];

      if (profilePicFile56.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(profilePicFile56);
        setProfilePicFile11(imageUrl);
        setFormData((prevData) => ({
          ...prevData,
          photo10: profilePicFile56,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChange12 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const constructionPic1 = files[0];

      if (constructionPic1.type.startsWith('image/')) {
        // Handle image files (jpeg, png, etc.)
        setConstructionPic1(constructionPic1);
        setFormData((prevData) => ({
          ...prevData,
          constructionPic1: constructionPic1,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };
  const handleFileChange13 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const constructionPic2 = files[0];

      if (constructionPic1.type.startsWith('image/')) {
        // Handle image files (jpeg, png, etc.)
        setConstructionPic2(constructionPic2);
        setFormData((prevData) => ({
          ...prevData,
          constructionPic2: constructionPic2,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };
  const handleFileChange14 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const constructionPic3 = files[0];

      if (constructionPic3.type.startsWith('image/')) {
        // Handle image files (jpeg, png, etc.)
        setConstructionPic3(constructionPic3);
        setFormData((prevData) => ({
          ...prevData,
          constructionPic3: constructionPic3,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChange15 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const constructionPic4 = files[0];

      if (constructionPic4.type.startsWith('image/')) {
        // Handle image files (jpeg, png, etc.)
        setConstructionPic4(constructionPic4);
        setFormData((prevData) => ({
          ...prevData,
          constructionPic4: constructionPic4,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };
  const handleFileChange16 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const constructionPic5 = files[0];

      if (constructionPic5.type.startsWith('image/')) {
        // Handle image files (jpeg, png, etc.)
        setConstructionPic5(constructionPic5);
        setFormData((prevData) => ({
          ...prevData,
          constructionPic5: constructionPic5,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };
  const handleFileChange17 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const constructionPic6 = files[0];

      if (constructionPic6.type.startsWith('image/')) {
        // Handle image files (jpeg, png, etc.)
        setConstructionPic6(constructionPic6);
        setFormData((prevData) => ({
          ...prevData,
          constructionPic6: constructionPic6,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };

  // website Images
  const handleFileChangeWebsite = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const bannerWebsite = files[0];

      if (bannerWebsite.type.startsWith('image/')) {
        // Handle image files (jpeg, png, etc.)
        setBannerWebsite(bannerWebsite);
        setFormData((prevData) => ({
          ...prevData,
          bannerWebsite: bannerWebsite,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChangeWebsite1 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const photo1Website = files[0];

      if (photo1Website.type.startsWith('image/')) {

        setPhoto1Website(photo1Website);
        setFormData((prevData) => ({
          ...prevData,
          photo1Website: photo1Website,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChangeWebsite2 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const photo2Website = files[0];

      if (photo2Website.type.startsWith('image/')) {

        setPhoto2Website(photo2Website);
        setFormData((prevData) => ({
          ...prevData,
          photo2Website: photo2Website,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChangeWebsite3 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const photo3Website = files[0];

      if (photo3Website.type.startsWith('image/')) {
        setPhoto3Website(photo3Website);
        setFormData((prevData) => ({
          ...prevData,
          photo3Website: photo3Website,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChangeWebsite4 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const photo4Website = files[0];

      if (photo4Website.type.startsWith('image/')) {
        setPhoto4Website(photo4Website);
        setFormData((prevData) => ({
          ...prevData,
          photo4Website: photo4Website,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChangeWebsite5 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const photo5Website = files[0];

      if (photo5Website.type.startsWith('image/')) {
        setPhoto5Website(photo5Website);
        setFormData((prevData) => ({
          ...prevData,
          photo5Website: photo5Website,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };
  const handleFileChangeWebsite6 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const photo6Website = files[0];

      if (photo6Website.type.startsWith('image/')) {
        setPhoto6Website(photo6Website);
        setFormData((prevData) => ({
          ...prevData,
          photo6Website: photo6Website,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChangeWebsite7 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const photo7Website = files[0];

      if (photo7Website.type.startsWith('image/')) {
        setPhoto7Website(photo7Website);
        setFormData((prevData) => ({
          ...prevData,
          photo7Website: photo7Website,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChangeWebsite8 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const photo8Website = files[0];

      if (photo8Website.type.startsWith('image/')) {
        setPhoto8Website(photo8Website);
        setFormData((prevData) => ({
          ...prevData,
          photo8Website: photo8Website,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChangeWebsite9 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const photo9Website = files[0];

      if (photo9Website.type.startsWith('image/')) {
        setPhoto9Website(photo9Website);
        setFormData((prevData) => ({
          ...prevData,
          photo9Website: photo9Website,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChangeWebsite10 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const photo10Website = files[0];

      if (photo10Website.type.startsWith('image/')) {
        setPhoto10Website(photo10Website);
        setFormData((prevData) => ({
          ...prevData,
          photo10Website: photo10Website,
        }));

      }
    } else {
      console.log('No file selected');
    }
  };




  useEffect(() => {
    const token = localStorage.getItem('Token');

    if (!token) {
      navigate('/');
    }
  }, [navigate]);


  //company 
  useEffect(() => {
    const Token = localStorage.getItem('Token');
    console.log('Token:', Token);
    fetch(`${apiUrl}/company/companyDropdown`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${Token}`

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


  return (
    <>

      <div className="page">
        {/* Main Header*/}

        <TopHeader />
        <Prince />

        <div className="main-content  pt-0">
          <div className="main-container container-fluid">
            <div className="inner-body">
              {/* Page Header */}
              <div className="page-header">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">Update Project</h2>
                </div>
              </div>
              {/* End Page Header */}
              {/* Row */}
              <div className="row row-sm">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-3">BASIC INFO</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">


                            <div className="col-lg-3 form-group">
                              <label className="form-label">
                                Project Name:<span className="tx-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                name="projectName"
                                value={formData.projectName}
                                onChange={handleChange}
                                placeholder="Enter "
                                required=""
                                type="text"
                              />

                            </div>
                            <div className="col-lg-3 form-group">
                              <label className="form-label">
                                Select Land: <span className="tx-danger">*</span>
                              </label>
                              <select className="form-control select2"
                                name="locationId"
                                value={formData.locationId}
                                onChange={handleChange}>
                                <option >Select </option>
                                {location.map((option, index) => (
                                  <option key={option.id} value={option.id}>
                                    {option.locationName}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="col-lg-3 form-group">
                              <label className="form-label">
                                Land Area (Beegha)
                              </label>
                              <input
                                className="form-control"
                                name="size"
                                value={formData.size}
                                // onChange={handleChange}
                                placeholder="Enter "
                                required=""
                                type="text"
                              />
                            </div>
                            <div className="col-lg-3 form-group">
                              <label className="form-label">
                                Available Area (Beegha)
                              </label>
                              <input
                                className="form-control"
                                name="areaAvailableForProject"
                                value={formData.areaAvailableForProject}
                                onChange={handleInputChangeNumber}
                                placeholder="Enter "
                                required=""
                                type="text"
                              />
                            </div>

                            <div className="col-lg-3 form-group">
                              <label className="form-label">
                                Allocate Area (Beegha)
                              </label>
                              <input
                                className="form-control"
                                name="areaAllocateToProject"
                                value={formData.areaAllocateToProject}
                                onChange={handleInputChangeNumber}
                                placeholder="Enter "
                                required=""
                                type="text"
                              />
                            </div>


                            <div className="col-lg-3 form-group">
                              <label className="form-label">
                                Display Status: <span className="tx-danger">*</span>
                              </label>
                              <select className="form-control select2"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}>
                                <option >Select </option>
                                {status.map((option, index) => (
                                  <option key={option.id} value={option.name}>
                                    {option.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-lg-3 form-group">
                              <label className="form-label">
                                No Of Plot:
                                <span className="tx-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                name="noOfPlot"
                                value={formData.noOfPlot}
                                onChange={handleInputChangeNumber}
                                placeholder="Enter "
                                required=""
                                type="text"
                              />
                            </div>
                            <div className="col-lg-3 form-group">
                              <label className="form-label">
                                No Of Shop:
                                <span className="tx-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                name="noOfShop"
                                value={formData.noOfShop}
                                onChange={handleInputChangeNumber}
                                placeholder="Enter "
                                required=""
                                type="text"
                              />
                            </div>
                            <div className="col-lg-3 form-group">
                              <label className="form-label">
                                No Of Farm House:
                                <span className="tx-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                name="noOfFarmHouse"
                                value={formData.noOfFarmHouse}
                                onChange={handleInputChangeNumber}
                                placeholder="Enter "
                                required=""
                                type="text"
                              />
                            </div>

                            <div className="col-lg-3 form-group">
                              <label className="form-label">
                                Map Url
                                <span className="tx-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                name="googleMapLink"
                                value={formData.googleMapLink}
                                onChange={handleChange}
                                placeholder="Enter "
                                required=""
                                type="text"
                              />
                            </div>

                            <div className="col-lg-3 form-group">
                              <label className="form-label">
                                Longitude

                              </label>
                              <input
                                className="form-control"
                                name="longitude"
                                value={formData.longitude}
                                onChange={handleChange}
                                placeholder="Enter "
                                required=""
                                type="text"
                              />
                            </div>



                            <div className="col-lg-3 form-group">
                              <label className="form-label">
                                Latitude

                              </label>
                              <input
                                className="form-control"
                                name="latitude"
                                value={formData.latitude}
                                onChange={handleChange}
                                placeholder="Enter "
                                required=""
                                type="text"
                              />
                            </div>

                            <div className="col-lg-3 form-group">
                              <label className="form-label">
                                Select Company: <span className="tx-danger">*</span>
                              </label>
                              <select className="form-control select2"
                                name="companyId"
                                value={formData.companyId}
                                onChange={handleChange}>
                                <option >Select </option>
                                {company.map((option, index) => (
                                  <option key={option.id} value={option.id}>
                                    {option.companyName}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Row */}
              <div className="row row-sm">
                <div className="col-lg-8 col-md-8">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Enter Details: <span className="tx-danger">*</span></h6>
                      </div>
                      <div className="row row-sm" style={{ height: '280px' }}>
                        <div className="col-sm-12 mg-t-10">
                          <ReactQuill
                            theme="snow"
                            value={formData.details}
                            onChange={(value) =>
                              setFormData((prevState) => ({
                                ...prevState,
                                details: value,
                              }))
                            }
                            style={{ height: "200px" }}
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Project Banners: <span className="tx-danger">*</span></h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">
                              <input
                                type="file"
                                className="dropify"
                                data-default-file="../assets/img/media/1.jpg"
                                data-height={200}
                                name="banner"
                                onChange={handleFileChange}
                              />
                              <div style={{ width: '350px', height: '180px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {profilePic && (
                                  <img src={profilePic} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!profilePic && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>



                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo 1</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">
                              <input
                                className="form-control"
                                type="file"
                                name="photo1"
                                onChange={handleFileChange2}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {profilePicFile2 && (
                                  <img src={profilePicFile2} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!profilePicFile2 && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>



                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo 2</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">
                              <input
                                className="form-control"
                                type="file"
                                name="photo2"
                                onChange={handleFileChange3}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {profilePicFile3 && (
                                  <img src={profilePicFile3} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!profilePicFile3 && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>



                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo 3</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">
                              <input
                                className="form-control"
                                type="file"
                                name="photo3"
                                onChange={handleFileChange4}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {profilePicFile4 && (
                                  <img src={profilePicFile4} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!profilePicFile4 && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo 4</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">
                              <input
                                className="form-control"
                                type="file"
                                name="photo4"
                                onChange={handleFileChange5}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {profilePicFile5 && (
                                  <img src={profilePicFile5} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!profilePicFile5 && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo 5</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">
                              <input
                                className="form-control"
                                type="file"
                                name="photo5"
                                onChange={handleFileChange6}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {profilePicFile6 && (
                                  <img src={profilePicFile6} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!profilePicFile6 && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo 6</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">
                              <input
                                className="form-control"
                                type="file"
                                name="photo6"
                                onChange={handleFileChange7}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {profilePicFile7 && (
                                  <img src={profilePicFile7} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!profilePicFile7 && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>



                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo 7</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">
                              <input
                                className="form-control"
                                type="file"
                                name="photo7"
                                onChange={handleFileChange8}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {profilePicFile8 && (
                                  <img src={profilePicFile8} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!profilePicFile8 && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo 8</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">
                              <input
                                className="form-control"
                                type="file"
                                name="photo8"
                                onChange={handleFileChange9}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {profilePicFile9 && (
                                  <img src={profilePicFile9} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!profilePicFile9 && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo 9</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">
                              <input
                                className="form-control"
                                type="file"
                                name="photo9"
                                onChange={handleFileChange10}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {profilePicFile10 && (
                                  <img src={profilePicFile10} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!profilePicFile10 && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>



                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo 10</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">
                              <input
                                className="form-control"
                                type="file"
                                name="photo10"
                                onChange={handleFileChange11}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {profilePicFile11 && (
                                  <img src={profilePicFile11} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!profilePicFile11 && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>



                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Video Upload</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">
                              <input
                                className="form-control"
                                type="text"
                                name="videoLink"
                                placeholder="Video URL"
                                onChange={handleUrlChange}
                              />
                              <div style={{
                                width: '350px',
                                height: '175px',
                                border: '1px solid #ccc',
                                marginTop: '8px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 auto',
                                maxWidth: '100%'
                              }}>
                                {youtubeUrl ? (
                                  <iframe
                                    width="100%"
                                    height="100%"
                                    src={getYoutubeEmbedUrl(youtubeUrl)}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded YouTube Video"
                                  />
                                ) : (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No Video</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>



                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Brochure</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">
                              <input
                                className="form-control"
                                type="file"
                                name="applicantPanImage"
                                onChange={handleFileChange23}
                              />

                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">MAP</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">
                              <input
                                className="form-control"
                                type="file"
                                name="applicantPanImage"
                                onChange={handleFileChange24}
                              />

                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div className="form-group mb-0">
                        <label className="form-label">
                          Construction Start Date
                        </label>
                        <div className="input-group">
                          <input
                            className="form-control fc-datepicker"
                            placeholder="MM/DD/YYYY"
                            // max={getCurrentDate()}
                            type="date"
                            name="constructionDateStart"
                            value={formData.constructionDateStart}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div className="form-group mb-0">
                        <label className="form-label">
                          Construction End Date
                        </label>
                        <div className="input-group">
                          <input
                            className="form-control fc-datepicker"
                            placeholder="MM/DD/YYYY"
                            // max={getCurrentDate()}
                            type="date"
                            name="constructionDateEnd"
                            value={formData.constructionDateEnd}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Banner Website</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">

                              <input
                                className="form-control"
                                type="file"
                                name="bannerWebsite"
                                onChange={handleFileChangeWebsite}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {bannerWebsite && (
                                  <img src={bannerWebsite} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!bannerWebsite && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo1 Website</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">

                              <input
                                className="form-control"
                                type="file"
                                name="photo1Website"
                                onChange={handleFileChangeWebsite1}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {photo1Website && (
                                  <img src={photo1Website} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!photo1Website && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo2 Website</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">

                              <input
                                className="form-control"
                                type="file"
                                name="photo2Website"
                                onChange={handleFileChangeWebsite2}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {photo2Website && (
                                  <img src={photo2Website} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!photo2Website && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>



                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo3 Website</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">

                              <input
                                className="form-control"
                                type="file"
                                name="photo3Website"
                                onChange={handleFileChangeWebsite3}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {photo3Website && (
                                  <img src={photo3Website} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!photo3Website && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo4 Website</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">

                              <input
                                className="form-control"
                                type="file"
                                name="photo4Website"
                                onChange={handleFileChangeWebsite4}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {photo4Website && (
                                  <img src={photo4Website} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!photo4Website && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo5 Website</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">

                              <input
                                className="form-control"
                                type="file"
                                name="photo5Website"
                                onChange={handleFileChangeWebsite5}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {photo5Website && (
                                  <img src={photo5Website} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!photo5Website && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo6 Website</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">

                              <input
                                className="form-control"
                                type="file"
                                name="photo6Website"
                                onChange={handleFileChangeWebsite6}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {photo6Website && (
                                  <img src={photo6Website} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!photo6Website && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>



                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo7 Website</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">

                              <input
                                className="form-control"
                                type="file"
                                name="photo7Website"
                                onChange={handleFileChangeWebsite7}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {photo7Website && (
                                  <img src={photo7Website} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!photo7Website && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo8 Website</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">

                              <input
                                className="form-control"
                                type="file"
                                name="photo8Website"
                                onChange={handleFileChangeWebsite8}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {photo8Website && (
                                  <img src={photo8Website} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!photo8Website && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo9 Website</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">

                              <input
                                className="form-control"
                                type="file"
                                name="photo9Website"
                                onChange={handleFileChangeWebsite9}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {photo9Website && (
                                  <img src={photo9Website} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!photo9Website && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>



                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Photo10 Website</h6>
                      </div>
                      <form action="form-validation.html" data-parsley-validate="">
                        <div className="">
                          <div className="row row-sm">
                            <div className="col-sm-12 col-md-12">

                              <input
                                className="form-control"
                                type="file"
                                name="photo10Website"
                                onChange={handleFileChangeWebsite10}
                              />
                              <div style={{ width: '350px', height: '175px', border: '1px solid #ccc', marginTop: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
                                {photo10Website && (
                                  <img src={photo10Website} alt="Selected File" style={{ width: "100%", height: "100%" }} />
                                )}
                                {!photo10Website && (
                                  <p style={{ textAlign: 'center', margin: 0 }}>No photo selected</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>









                <div className="col-lg-8 col-md-8">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div>
                        <h6 className="main-content-label mb-1">Enter Locality Details:<span className="tx-danger">*</span></h6>
                      </div>

                      <div className="row row-sm" style={{ height: '280px' }}>
                        <div className="col-sm-12 mg-t-10">
                          <ReactQuill
                            theme="snow"
                            // value={formData.localityInfo}
                            // onChange={handleInputChangeTextAreaLoacality}
                            value={formData.localityInfo}
                            onChange={(value) =>
                              setFormData((prevState) => ({
                                ...prevState,
                                localityInfo: value,
                              }))
                            }
                            style={{ height: "200px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>




              </div>
              {/* End Row */}
              <div className="row row-sm">
                <div className="col-12 mb-3">
                  <a
                    href=""
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleUpdate}
                  >
                    Update
                  </a>
                </div>
              </div>
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

export default ProjectEdit