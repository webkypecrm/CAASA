import React, { useState  } from 'react';
function App1() {
  const [file, setFile] = useState(null); // Initialize file state to null
  const [description, setDescription] = useState("");

  const initialFormData = {
    profilePic: '',
    firstName: 'John',
    lastName: '',
    email: '',
    mobileNumber: '',
    gender: '',
    dob: '',
    currentAddressCountry: '',
    currentAddressState: '',
    currentAddressCity: '',
    currentAddressArea: '',
    currentAddressLane: '',
    currentAddressPinCode: '',
    sameAsCurrentAddress: true,
    permanentAddressCountry: '',
    permanentAddressState: '',
    permanentAddressCity: '',
    permanentAddressArea: '',
    permanentAddressLane: '',
    permanentAddressPinCode: '',
    companyName: '',
    department: '',
    designation: '',
    dateOfJoin: "",
    reportingBossA: '',
    reportingBossB: '',
    permissions: '',
    adharImage: '',
    adharNumber: '',
    panImage: '',
    PanNumber: '',
    drivingLicenseImage: '',
    chequeImage: '',
    accountNumber: '',
    accountName: '',
    bankName: '',
    ifsc: '',
    offeredPackage: '',
    offeredCTC: '',
    noticePeriod: '',
    workingShift: '',
    perHourCharges: '',
    perCasesCharges: '',
    perMonthCharges: '',
    consultingFees: '',
    offerLetterUpload: null,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [firstName, setfirstName] = useState("");

  const submit = async event => {
    event.preventDefault();
    console.log(formData);
    if (file) {
      const formData = new FormData();
      formData.append("adharImage", file);
      formData.append("firstName", firstName);
      // formData.append("description", description);

      try {
        const result = fetch('https://15391de31119943ba00d98526b3b133d.serveo.net/employee/add-employee', {
          method: 'POST',
          body: formData
      });
       // const result = await axios.post('http://localhost:5000/image', formData, {
          // headers: { 'Content-Type': 'multipart/form-data' },
        //});
        console.log(result.data);
      } catch (error) {
        console.error("Error uploading the image", error);
      }
    } else {
      console.error("Please select an image to upload.");
    }
  }
}
  export default App1