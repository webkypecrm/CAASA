import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import TopHeader from "../Components/TopHeader";
import Prince from "../Components/Prince";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { format } from 'date-fns';


const SingalPaymentLadger = () => {
  const { empid } = useParams();
  const navigate = useNavigate();

  const initialFormData = {
    amount: "",
    collectionMode: "",
    collectionMode: "",
    enterDiscount: "",
    paymentCredit: "",
    handOverBy: "",
    collectedBy: "",
    uploadRecipt: "",
    select: "",
    amrsAccount: "",
    transactionNo: "",
    chequeDate: "",
    chequeNo: "",
    bankCheque: "",
    deposteToAmrs: "",
    remark: "",
    otp: "",
  };

  const initialFormDataNoc = {
    amount: "",
    collectionMode: "",
    collectionMode: "",
    enterDiscount: "",
    paymentCredit: "",
    handOverBy: "",
    collectedBy: "",
    uploadRecipt: "",
    select: "",
    amrsAccount: "",
    transactionNo: "",
    chequeDate: "",
    chequeNo: "",
    bankCheque: "",
    deposteToAmrs: "",
    remark: "",
    otp: "",
  };

  const initialFormData10 = {
    amount: "",
    collectionMode: "",
    enterDiscount: "",
    paymentCredit: "",
    handOverBy: "",
    collectedBy: "",
    uploadRecipt: "",
    select: "",
    amrsAccount: "",
    transactionNo: "",
    chequeDate: "",
    chequeNo: "",
    bankCheque: "",
    deposteToAmrs: "",
    remark: "",
  };

  const initialFormData11 = {
    reason: "",
  };
  const initialFormDataNOC11 = {
    reason: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [formDataNoc, setFormDataNoc] = useState(initialFormDataNoc);
  const [formData11, setFormData11] = useState(initialFormData11);
  const [formDataNOC11, setFormDataNOC11] = useState(initialFormDataNOC11);
  const [formData10, setFormData10] = useState(initialFormData10);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpenNocPayment, setIsModalOpenNocPayment] = useState(false);
  const [isModalOpen10, setIsModalOpen10] = useState(false);
  const [isModalOpen11, setIsModalOpen11] = useState(false);
  const [project, setProject] = useState([]);
  const [users, setUsers] = useState([]);
  const [nocPayments, setNocPayments] = useState([]);
  const [usersTwo, setUsersTwo] = useState([]);
  const [usersOne, setUsersOne] = useState([]);
  const [usersNOCOne, setUsersNOCOne] = useState([]);
  const [usersNOCTwo, setUsersNOCTwo] = useState([]);
  const [receiptData, setReceiptData] = useState({});
  const [payBal, setPayBal] = useState("");
  const [payNOCBal, setNOCPayBal] = useState("");
  const [payNOCBal2, setNOCPayBal2] = useState("");
  const [payBals, setPayBals] = useState("");
  const [userss, setUserss] = useState([]);
  const [employee, setEmployee] = useState({});
  const [employee3, setEmployee3] = useState({});
  const [employee4, setEmployee4] = useState({});
  const [isDoneRegistryLoading, setIsDoneRegistryLoading] = useState(false);

  const registryInitialFormData = {
    applicantId: employee4?.id || "",
    registryName: employee4?.fullName || "",
    fatherName: employee4?.applicantFatherName || "",
    registyLocation: "",
    registryDate: "",
    registryDateTime: "",
    unitNo: employee4?.unitNo,
    description: "",
    registryImage: ""
  };

  const [formDataRegistry, setFormDataRegistry] = useState(
    registryInitialFormData
  );

  useEffect(() => {
    setFormDataRegistry({
      ...registryInitialFormData,
      applicantId: employee4?.id || "",
    });
  }, [employee4?.id]);

  const [pdfView, setPdfView] = useState([]);
  const [pdfViews, setPdfViews] = useState({});
  const [disableInput2, setDisableInput2] = useState(true);
  const [holdStatus, setHoldStatus] = useState({});
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [holdActionId, setHoldActionId] = useState(null);
  const [holdActionIds, setHoldActionIds] = useState("");
  const [holdActionNOCIds, setHoldActionNOCIds] = useState("");
  const [paidAmount, setPaidAmount] = useState(0);
  const [NocPaidAmount, setNOCPaidAmount] = useState(0);
  const [NocPaidAmount2, setNOCPaidAmount2] = useState(0);
  const [employee2, setEmployee2] = useState({});
  const [users2, setUsers2] = useState([]);
  const [users3, setUsers3] = useState([]);
  const [users4, setUsers4] = useState([]);
  const [reportingBossA, setReportingBossA] = useState([]);
  const [total1, setTotal1] = useState("");
  const [total2, setTotal2] = useState("");
  const [total3, setTotal3] = useState("");
  const [total4, setTotal4] = useState("");

  const [total5, setTotal5] = useState("");
  const [total6, setTotal6] = useState("");
  const [total7, setTotal7] = useState("");
  const [total8, setTotal8] = useState("");
  const [total9, setTotal9] = useState("");
  const [total10, setTotal10] = useState("");
  const [total11, setTotal11] = useState("");
  const [total12, setTotal12] = useState("");
  const [total13, setTotal13] = useState("");
  const [total14, setTotal14] = useState("");
  const [ins, setIns] = useState("");

  const [unitCounts, setUnitCounts] = useState([]);

  const [isModalOpen16, setIsModalOpen16] = useState(false);
  const [gift, setGift] = useState([]);
  const [isModalOpen56, setIsModalOpen56] = useState(false);

  const [isModalOpen57, setIsModalOpen57] = useState("");

  const [isModalOpen58, setIsModalOpen58] = useState(false);

  const [isModalOpen59, setIsModalOpen59] = useState("");
  const [isModalOpen60, setIsModalOpen60] = useState("");

  const [totalss3, setTotalss3] = useState("");
  const [totalss4, setTotalss4] = useState("");
  const [totalss5, setTotalss5] = useState("");
  const [totalss6, setTotalss6] = useState("");

  const [loadings, setLoadings] = useState(false);
  const [loadingss, setLoadingss] = useState(false);
  const [bank, setBank] = useState([]);
  const [bankList, setBankList] = useState([]);
  const [nocPaymentFor, setNocPaymentFor] = useState([]);
  const [idsss, setIdsss] = useState("");
  const [idssss, setIdssss] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoadingOtp, setIsLoadingOtp] = useState(false);
  const [isChequeDuplicate, setIsChequeDuplicate] = useState(false);
  const [isChequeDuplicateNoc, setIsChequeDuplicateNoc] = useState(false);
  const [isModalOpens4, setIsModalOpens4] = useState(false);
  const [isModalOpenNOCs4, setIsModalNOCOpens4] = useState(false);
  const [isModalDueOpens, setIsModalDueOpens] = useState(false);
  const [isModalMaintenanceOpens, setIsModalMaintenanceOpens] = useState(false);
  const [isModalNameChangeOpens, setIsModalNameChangeOpens] = useState(false);
  const [isModalInterestOpens, setIsModalInterestOpens] = useState(false);
  const [isModalChequeOpens, setIsModalChequeOpens] = useState(false);
  const [isModalGSTOpens, setIsModalGSTOpens] = useState(false);
  const [IsDueReceiptDueOpens, setIsDueReceiptDueOpens] = useState(false);
  const [isMaintenanceReceiptDueOpens, setIsMaintenanceReceiptDueOpens] =
    useState(false);
  const [isNameChangeReceiptDueOpens, setIsNameChangeReceiptDueOpens] =
    useState(false);
  const [isCheckBounceReceiptDueOpens, setIsCheckBounceReceiptDueOpens] =
    useState(false);
  const [isInterestReceiptDueOpens, setIsInterestReceiptDueOpens] =
    useState(false);
  const [isGSTReceiptDueOpens, setIsGSTReceiptDueOpens] = useState(false);
  const [isRegistryScheduleOpens, setIsRegistryScheduleOpens] = useState(false);
  const [sheduleRegistryLoading, setSheduleRegistryLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_URL;

  const Token = localStorage.getItem("Token");

  const handleOpenModal56 = async (id) => {
    setIsModalOpen57(id);
    setIsModalOpen56(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal56 = () => {
    setIsModalOpen56(false);
    document.body.classList.remove("modal-open");
  };

  const handleOpenModal60 = async (id) => {
    // Trigger data fetching before opening the modal
    await fetchDataUnitCounts();
    setIsModalOpen60(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal60 = () => {
    setIsModalOpen60(false);
    document.body.classList.remove("modal-open");
  };

  useEffect(() => {
    if (isModalOpen56) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen56]);

  const handleOpenModal58 = async (id) => {
    setIsModalOpen59(id);
    setIsModalOpen58(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal58 = () => {
    setIsModalOpen58(false);
    document.body.classList.remove("modal-open");
  };


  // Send Cam Email
  const handleSendNocEmail = (followUpId) => {
    axios
      .get(`${apiUrl}/registry/sendNocEmail`, {
        params: {
          inventoryFollowUpId: followUpId,
        },
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then(() => {
        // setOtpSent(true);
        toast.success("Noc Email sent successfully.");
      })
      .catch((err) => {
        console.error("Send Noc Email Error:", err);
        toast.error("Failed to send Noc Email.");
      });
  };

  useEffect(() => {
    if (isModalOpen58) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen58]);

  useEffect(() => {
    fetch(`${apiUrl}/bank/accountDropdown`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setBank(data.data);
        } else {
          console.error(
            "API response is not in the expected format for countries."
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/master/getAllMasterData/27`, {
      headers: { Authorization: `Bearer ${Token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          console.log("API Response:", data.data);
          setBankList(data.data);
        } else {
          console.error("API response is not in the expected format.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/master/getAllMasterData/29`, {
      headers: { Authorization: `Bearer ${Token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          console.log("API Response:", data.data);
          setNocPaymentFor(data.data);
        } else {
          console.error("API response is not in the expected format.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const fetchDataUnitCounts = async () => {
    // Correct the URL by removing the single quotes around Allocated
    const url = `${apiUrl}/applicant/applicants?userId=${employee4.userId}&stage=Allocated&isWLD=all`;

    try {
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${Token}` },
      });
      const data = await response.json();

      if (data.status === "success" && Array.isArray(data.data)) {
        const formattedData = data.data.map((item) => ({
          ...item,
          formattedDate: item.applicantDOB
            ? formatDateTime(item.applicantDOB)
            : "",
        }));
        setUnitCounts(formattedData);
      } else {
        console.error("Unexpected API response:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataUnitCounts();
  }, []);

  // dlp

  useEffect(() => {
    const areaValue = parseFloat(employee4.inventory?.size);
    const priceValue = parseFloat(employee4.inventory?.bspDLP);
    const priceValues = parseFloat(employee4.inventory?.edcIdcValue);
    const priceValuess = parseFloat(employee4.inventory?.plcValue);

    // Check if both areaValue and priceValue are valid numbers
    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate 15% of the total value

      const totalValue =
        areaValue * priceValue +
        priceValues +
        areaValue * priceValue * priceValuess;
      const totalValues = totalValue * 0.15;

      // Format the total value and remove decimal if it's ".00"
      let formattedTotalValue = totalValues.toFixed(2);
      if (formattedTotalValue.endsWith(".00")) {
        formattedTotalValue = formattedTotalValue.slice(0, -3);
      }

      // Set the calculated value to state
      setTotalss3(formattedTotalValue);
    }
  }, [
    employee4.inventory?.size,
    employee4.inventory?.bspDLP,
    employee4.inventory?.plcValue,
    employee4.inventory?.edcIdcValue,
  ]);

  useEffect(() => {
    const areaValue = parseFloat(employee4.inventory?.size);
    const priceValue = parseFloat(employee4.inventory?.bspDLP);
    const priceValues = parseFloat(employee4.inventory?.edcIdcValue);
    const priceValuess = parseFloat(employee4.inventory?.plcValue);

    // Check if both areaValue and priceValue are valid numbers
    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate 15% of the total value

      const totalValue =
        areaValue * priceValue +
        priceValues +
        areaValue * priceValue * priceValuess;
      const totalValues = totalValue * 0.1;

      // Format the total value and remove decimal if it's ".00"
      let formattedTotalValue = totalValues.toFixed(2);
      if (formattedTotalValue.endsWith(".00")) {
        formattedTotalValue = formattedTotalValue.slice(0, -3);
      }

      // Set the calculated value to state
      setTotalss4(formattedTotalValue);
    }
  }, [
    employee4.inventory?.size,
    employee4.inventory?.bspDLP,
    employee4.inventory?.plcValue,
    employee4.inventory?.edcIdcValue,
  ]);

  useEffect(() => {
    const areaValue = parseFloat(employee4.inventory?.size);
    const priceValue = parseFloat(employee4.inventory?.bspDLP);
    const priceValues = parseFloat(employee4.inventory?.edcIdcValue);
    const priceValuess = parseFloat(employee4.inventory?.plcValue);

    // Check if both areaValue and priceValue are valid numbers
    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate 15% of the total value
      const totalValue =
        areaValue * priceValue +
        priceValues +
        areaValue * priceValue * priceValuess;
      const totalValues = totalValue * 0.05;

      // Format the total value and remove decimal if it's ".00"
      let formattedTotalValue = totalValues.toFixed(2);
      if (formattedTotalValue.endsWith(".00")) {
        formattedTotalValue = formattedTotalValue.slice(0, -3);
      }

      // Set the calculated value to state
      setTotalss5(formattedTotalValue);
    }
  }, [
    employee4.inventory?.size,
    employee4.inventory?.bspDLP,
    employee4.inventory?.plcValue,
    employee4.inventory?.edcIdcValue,
  ]);

  useEffect(() => {
    const areaValue = parseFloat(employee4.inventory?.size);
    const priceValue = parseFloat(employee4.inventory?.bspDLP);
    const priceValues = parseFloat(employee4.inventory?.edcIdcValue);
    const priceValuess = parseFloat(employee4.inventory?.plcValue);

    // Check if both areaValue and priceValue are valid numbers
    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate 100% of the total value

      const totalValue =
        areaValue * priceValue +
        priceValues +
        areaValue * priceValue * priceValuess;

      setTotalss6(totalValue);
    }
  }, [
    employee4.inventory?.size,
    employee4.inventory?.bspDLP,
    employee4.inventory?.plcValue,
    employee4.inventory?.edcIdcValue,
  ]);

  // fpp plan
  useEffect(() => {
    const areaValue = parseFloat(employee4.totalCost);
    const priceValue = parseFloat(
      employee4 && employee4.plan && employee4.plan.onBookingPerFPP
    );

    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate the percentage
      const percentageValue = areaValue * (priceValue / 100);

      // Format the percentage value
      let formattedPercentageValue = percentageValue.toFixed(2);
      if (formattedPercentageValue.endsWith(".00")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -3);
      } else if (formattedPercentageValue.endsWith("0")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -1);
      }

      setTotal1(formattedPercentageValue);
    } else {
      setTotal1(null);
    }
  }, [
    employee4.totalCost,
    employee4 && employee4.plan && employee4.plan.onBookingPerFPP,
  ]);

  useEffect(() => {
    const areaValue = parseFloat(employee4.totalCost);
    const priceValue = parseFloat(total1);

    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      const totalValue = (areaValue - priceValue) / 24;
      let formattedTotalValue = totalValue.toFixed(2);
      if (formattedTotalValue.endsWith(".00")) {
        formattedTotalValue = formattedTotalValue.slice(0, -3);
      }
      setIns(formattedTotalValue);
      console.log("Total (divided by 24 months):", formattedTotalValue);
    } else {
      setIns(null);
    }
  }, [employee4.totalCost, total1]);

  //DLP plan

  useEffect(() => {
    const areaValue = parseFloat(employee4.totalCost);
    const priceValue = parseFloat(
      employee4 && employee4.plan && employee4.plan.onBookingPerDLP
    );

    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate the percentage
      const percentageValue = areaValue * (priceValue / 100);

      // Format the percentage value
      let formattedPercentageValue = percentageValue.toFixed(2);
      if (formattedPercentageValue.endsWith(".00")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -3);
      } else if (formattedPercentageValue.endsWith("0")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -1);
      }

      setTotal2(formattedPercentageValue);
    } else {
      setTotal2(null);
    }
  }, [
    employee4.totalCost,
    employee4 && employee4.plan && employee4.plan.onBookingPerDLP,
  ]);

  useEffect(() => {
    const areaValue = parseFloat(employee4.totalCost);
    const priceValue = parseFloat(
      employee4 && employee4.plan && employee4.plan.withIn30PerDLP
    );

    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate the percentage
      const percentageValue = areaValue * (priceValue / 100);

      // Format the percentage value
      let formattedPercentageValue = percentageValue.toFixed(2);
      if (formattedPercentageValue.endsWith(".00")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -3);
      } else if (formattedPercentageValue.endsWith("0")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -1);
      }

      setTotal3(formattedPercentageValue);
    } else {
      setTotal3(null);
    }
  }, [
    employee4.totalCost,
    employee4 && employee4.plan && employee4.plan.withIn30PerDLP,
  ]);

  useEffect(() => {
    const areaValue = parseFloat(employee4.totalCost);
    const priceValue = parseFloat(
      employee4 && employee4.plan && employee4.plan.restOnRegistryPerDLP
    );

    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate the percentage
      const percentageValue = areaValue * (priceValue / 100);

      // Format the percentage value
      let formattedPercentageValue = percentageValue.toFixed(2);
      if (formattedPercentageValue.endsWith(".00")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -3);
      } else if (formattedPercentageValue.endsWith("0")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -1);
      }

      setTotal4(formattedPercentageValue);
    } else {
      setTotal4(null);
    }
  }, [
    employee4.totalCost,
    employee4 && employee4.plan && employee4.plan.restOnRegistryPerDLP,
  ]);

  //PLP Plan

  useEffect(() => {
    const areaValue = parseFloat(employee4.totalCost);
    const priceValue = parseFloat(
      employee4 && employee4.plan && employee4.plan.onBookingPerPLP
    );

    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate the percentage
      const percentageValue = areaValue * (priceValue / 100);

      // Format the percentage value
      let formattedPercentageValue = percentageValue.toFixed(2);
      if (formattedPercentageValue.endsWith(".00")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -3);
      } else if (formattedPercentageValue.endsWith("0")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -1);
      }

      setTotal5(formattedPercentageValue);
    } else {
      setTotal5(null);
    }
  }, [
    employee4.totalCost,
    employee4 && employee4.plan && employee4.plan.onBookingPerPLP,
  ]);

  useEffect(() => {
    const areaValue = parseFloat(employee4.totalCost);
    const priceValue = parseFloat(
      employee4 && employee4.plan && employee4.plan.withIn60PerPLP
    );

    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate the percentage
      const percentageValue = areaValue * (priceValue / 100);

      // Format the percentage value
      let formattedPercentageValue = percentageValue.toFixed(2);
      if (formattedPercentageValue.endsWith(".00")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -3);
      } else if (formattedPercentageValue.endsWith("0")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -1);
      }

      setTotal6(formattedPercentageValue);
    } else {
      setTotal6(null);
    }
  }, [
    employee4.totalCost,
    employee4 && employee4.plan && employee4.plan.withIn60PerPLP,
  ]);

  useEffect(() => {
    const areaValue = parseFloat(employee4.totalCost);
    const priceValue = parseFloat(
      employee4 && employee4.plan && employee4.plan.withIn90PerPLP
    );

    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate the percentage
      const percentageValue = areaValue * (priceValue / 100);

      // Format the percentage value
      let formattedPercentageValue = percentageValue.toFixed(2);
      if (formattedPercentageValue.endsWith(".00")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -3);
      } else if (formattedPercentageValue.endsWith("0")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -1);
      }

      setTotal7(formattedPercentageValue);
    } else {
      setTotal7(null);
    }
  }, [
    employee4.totalCost,
    employee4 && employee4.plan && employee4.plan.withIn90PerPLP,
  ]);

  useEffect(() => {
    const areaValue = parseFloat(employee4.totalCost);
    const priceValue = parseFloat(
      employee4 && employee4.plan && employee4.plan.withIn120PerPLP
    );

    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate the percentage
      const percentageValue = areaValue * (priceValue / 100);

      // Format the percentage value
      let formattedPercentageValue = percentageValue.toFixed(2);
      if (formattedPercentageValue.endsWith(".00")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -3);
      } else if (formattedPercentageValue.endsWith("0")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -1);
      }

      setTotal8(formattedPercentageValue);
    } else {
      setTotal8(null);
    }
  }, [
    employee4.totalCost,
    employee4 && employee4.plan && employee4.plan.withIn120PerPLP,
  ]);

  useEffect(() => {
    const areaValue = parseFloat(employee4.totalCost);
    const priceValue = parseFloat(
      employee4 && employee4.plan && employee4.plan.withIn150PerPLP
    );

    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate the percentage
      const percentageValue = areaValue * (priceValue / 100);

      // Format the percentage value
      let formattedPercentageValue = percentageValue.toFixed(2);
      if (formattedPercentageValue.endsWith(".00")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -3);
      } else if (formattedPercentageValue.endsWith("0")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -1);
      }

      setTotal9(formattedPercentageValue);
    } else {
      setTotal9(null);
    }
  }, [
    employee4.totalCost,
    employee4 && employee4.plan && employee4.plan.withIn150PerPLP,
  ]);

  useEffect(() => {
    const areaValue = parseFloat(employee4.totalCost);
    const priceValue = parseFloat(
      employee4 && employee4.plan && employee4.plan.withIn180PerPLP
    );

    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate the percentage
      const percentageValue = areaValue * (priceValue / 100);

      // Format the percentage value
      let formattedPercentageValue = percentageValue.toFixed(2);
      if (formattedPercentageValue.endsWith(".00")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -3);
      } else if (formattedPercentageValue.endsWith("0")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -1);
      }

      setTotal10(formattedPercentageValue);
    } else {
      setTotal10(null);
    }
  }, [
    employee4.totalCost,
    employee4 && employee4.plan && employee4.plan.withIn180PerPLP,
  ]);

  useEffect(() => {
    const areaValue = parseFloat(employee4.totalCost);
    const priceValue = parseFloat(
      employee4 && employee4.plan && employee4.plan.extraPerPLP1
    );

    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate the percentage
      const percentageValue = areaValue * (priceValue / 100);

      // Format the percentage value
      let formattedPercentageValue = percentageValue.toFixed(2);
      if (formattedPercentageValue.endsWith(".00")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -3);
      } else if (formattedPercentageValue.endsWith("0")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -1);
      }

      setTotal11(formattedPercentageValue);
    } else {
      setTotal11(null);
    }
  }, [
    employee4.totalCost,
    employee4 && employee4.plan && employee4.plan.extraPerPLP1,
  ]);

  useEffect(() => {
    const areaValue = parseFloat(employee4.totalCost);
    const priceValue = parseFloat(
      employee4 && employee4.plan && employee4.plan.extraPerPLP2
    );

    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate the percentage
      const percentageValue = areaValue * (priceValue / 100);

      // Format the percentage value
      let formattedPercentageValue = percentageValue.toFixed(2);
      if (formattedPercentageValue.endsWith(".00")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -3);
      } else if (formattedPercentageValue.endsWith("0")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -1);
      }

      setTotal12(formattedPercentageValue);
    } else {
      setTotal12(null);
    }
  }, [
    employee4.totalCost,
    employee4 && employee4.plan && employee4.plan.extraPerPLP2,
  ]);

  useEffect(() => {
    const areaValue = parseFloat(employee4.totalCost);
    const priceValue = parseFloat(
      employee4 && employee4.plan && employee4.plan.extraPerPLP3
    );

    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate the percentage
      const percentageValue = areaValue * (priceValue / 100);

      // Format the percentage value
      let formattedPercentageValue = percentageValue.toFixed(2);
      if (formattedPercentageValue.endsWith(".00")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -3);
      } else if (formattedPercentageValue.endsWith("0")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -1);
      }

      setTotal13(formattedPercentageValue);
    } else {
      setTotal13(null);
    }
  }, [
    employee4.totalCost,
    employee4 && employee4.plan && employee4.plan.extraPerPLP3,
  ]);

  useEffect(() => {
    const areaValue = parseFloat(employee4.totalCost);
    const priceValue = parseFloat(
      employee4 && employee4.plan && employee4.plan.restOnRegistryPerPLP
    );

    if (!isNaN(areaValue) && !isNaN(priceValue)) {
      // Calculate the percentage
      const percentageValue = areaValue * (priceValue / 100);

      // Format the percentage value
      let formattedPercentageValue = percentageValue.toFixed(2);
      if (formattedPercentageValue.endsWith(".00")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -3);
      } else if (formattedPercentageValue.endsWith("0")) {
        formattedPercentageValue = formattedPercentageValue.slice(0, -1);
      }

      setTotal14(formattedPercentageValue);
    } else {
      setTotal14(null);
    }
  }, [
    employee4.totalCost,
    employee4 && employee4.plan && employee4.plan.restOnRegistryPerPLP,
  ]);

  const handleOpenModal16 = () => {
    setIsModalOpen16(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal16 = () => {
    setIsModalOpen16(false);
    document.body.classList.remove("modal-open");
  };

  useEffect(() => {
    if (isModalOpen16) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen16]);

  const handleOpenModal3 = () => {
    setIsModalOpen3(true);
    // document.body.classList.add('modal-open');
  };

  const handleCloseModal3 = () => {
    setIsModalOpen3(false);

    setLoadings(false);
    setFormData(initialFormData);
  };

  const handleOpenModaNocPayment = () => {
    setIsModalOpenNocPayment(true);
    // document.body.classList.add('modal-open');
  };

  const handleCloseModalNocPayment = () => {
    setIsModalOpenNocPayment(false);

    setLoadings(false);
    setFormDataNoc(initialFormDataNoc);
  };

  const handleOpenModal10 = (id) => {
    setIdsss(id);
    setIsModalOpen10(true);
    // document.body.style.overflow = 'hidden';
    // document.body.classList.add('modal-open');
  };

  const handleCloseModal10 = () => {
    setIsModalOpen10(false);
    document.body.style.overflow = "";
    setLoadingss(false);
    setFormData(initialFormData);
  };

  const handleOpenModal11 = (id) => {
    setIdssss(id);
    setIsModalOpen11(true);
    // document.body.classList.add('modal-open');
  };

  const handleSendOtp = async (event) => {
    event.preventDefault();
    try {
      setIsLoadingOtp(true);
      const response = await fetch(
        `${apiUrl}/payment/generateOtpForDiscount?applicantId=${empid}&amount=${formData.amount}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send OTP");
      }

      const data = await response.json();
      toast.success("OTP sent successfully!");
      setIsDisabled(true);
    } catch (error) {
      toast.error(error.message || "An error occurred");
    } finally {
      setIsLoadingOtp(false);
      setTimeout(() => {
        setIsDisabled(false);
      }, 60000);
    }
  };

  const handleSendEditOtp = async (event) => {
    event.preventDefault();
    try {
      setIsLoadingOtp(true);
      const response = await fetch(
        `${apiUrl}/payment/generateOtpForDiscount?applicantId=${empid}&amount=${formData10.amount}&paymentId=${formData10.id}&isEdit=true`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send OTP");
      }

      const data = await response.json();
      toast.success("OTP sent successfully!");
      setIsDisabled(true);
    } catch (error) {
      toast.error(error.message || "An error occurred");
    } finally {
      setIsLoadingOtp(false);
      setTimeout(() => {
        setIsDisabled(false);
      }, 60000);
    }
  };

  const handleCloseModal11 = () => {
    setIsModalOpen11(false);
  };

  useEffect(() => {
    if (isModalOpen11) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen11]);

  const handleOpenModal4 = (id) => {
    setHoldActionId(id);
    setIsModalOpen4(true);
  };

  const handleCloseModal4 = () => {
    setIsModalOpen4(false);
    setHoldActionId(null);
  };

  const handleOpenModals4 = (id) => {
    setHoldActionIds(id);
    setIsModalOpens4(true);
  };

  const handleCloseModals4 = () => {
    setIsModalOpens4(false);
    setHoldActionIds(null);
  };

  const handleOpenModalNocs4 = (id) => {
    setHoldActionNOCIds(id);
    setIsModalNOCOpens4(true);
  };

  const handleCloseModalNocs4 = () => {
    setIsModalNOCOpens4(false);
    setHoldActionNOCIds(null);
  };

  const handleCloseDueModal = () => {
    setIsModalDueOpens(false);
    // setHoldActionIds(null);
  };
  const handleCloseMaintenanceModal = () => {
    setIsModalMaintenanceOpens(false);
    // setHoldActionIds(null);
  };

  const handleCloseNameChangeModal = () => {
    setIsModalNameChangeOpens(false);
    // setHoldActionIds(null);
  };
  const handleCloseChequeModal = () => {
    setIsModalChequeOpens(false);
    // setHoldActionIds(null);
  };
  const handleCloseInterestModal = () => {
    setIsModalInterestOpens(false);
    // setHoldActionIds(null);
  };
  const handleCloseGSTModal = () => {
    setIsModalGSTOpens(false);
    // setHoldActionIds(null);
  };

  const handleInputChange10 = (event) => {
    const { name, value } = event.target;
    setFormData10({
      ...formData10,
      [name]: value,
    });
  };

  const handleInputChange11 = (event) => {
    const { name, value } = event.target;
    setFormData11({
      ...formData11,
      [name]: value,
    });
  };

  const handleNocInputChange11 = (event) => {
    const { name, value } = event.target;
    setFormDataNOC11({
      ...formDataNOC11,
      [name]: value,
    });
  };

  const handleFileChange10 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const applicantImageFile = files[0];

      if (applicantImageFile.type.startsWith("image/")) {
        setFormData10((prevData) => ({
          ...prevData,
          uploadRecipt: applicantImageFile,
        }));
      } else if (applicantImageFile.type === "application/pdf") {
        // Handle PDF files
        setFormData10((prevData) => ({
          ...prevData,
          uploadRecipt: applicantImageFile,
        }));
      } else {
        console.log("Unsupported file type");
      }
    } else {
      console.log("No file selected");
    }
  };

  const fetchUser = async () => {
    try {
      const url = `${apiUrl}/payment/getSinglePayment?paymentId=${idsss}`;
      let result = await fetch(url, {
        headers: {
          Authorization: `Bearer ${Token}`,
          "Content-Type": "application/json",
        },
      });

      result = await result.json();
      const { data } = result;

      setFormData10((prevFormData) => ({
        ...prevFormData,
        id: data?.id,
        amount: data?.amount,
        collectionMode: data?.collectionMode,
        enterDiscount: data?.enterDiscount,
        paymentCredit: data?.paymentCredit,
        handOverBy: data?.handOverBy,
        collectedBy: data?.collectedBy,
        uploadRecipt: data?.uploadRecipt,
        select: data?.select,
        amrsAccount: data?.amrsAccount,
        transactionNo: data?.transactionNo,
        chequeDate: data?.chequeDate,
        chequeNo: data?.chequeNo,
        bankCheque: data?.bankCheque,
        deposteToAmrs: data?.deposteToAmrs,
        remark: data?.remark,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [idsss]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoadingss(true);

    try {
      const formDataToSend = new FormData();

      // Append non-null form data fields
      for (const key in formData10) {
        if (formData10[key] !== null) {
          formDataToSend.append(key, formData10[key]);
        }
      }

      const response = await fetch(
        `${apiUrl}/payment/updateLdPayment?paymentId=${idsss}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formDataToSend,
        }
      );

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }

      toast.success(response2.message);
      handleCloseModal10();
      fetchDataFromApi();
      setFormData10(initialFormData10);
      fetchPaymentHistory();
      fetchUser();
      fetchDataFromApiTwo();
      fetchDataFromApiOne();
      navigate(`/single-payment-entry/${empid}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoadingss(false);
    }
  };

  async function getEmppps() {
    const url = `${apiUrl}/applicant/getApplicantInfo/${empid}`;
    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    response = await response.json();

    if (response.status === "success") {
      setEmployee4(response.data);
    }
  }

  const getPdfView = async (id) => {
    try {
      const response = await fetch(
        `${apiUrl}/eoi/demandLetters?applicantId=${empid}&scheduleId=${isModalOpen57}`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      const data = await response.json();

      if (data.status === "success" && Array.isArray(data.data)) {
        setPdfView(data.data);
      } else {
        console.error(
          "API response error:",
          data.message || "Invalid companyList"
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getPdfView();
  }, [isModalOpen57, empid]);

  const getPdfViews = async (id) => {
    try {
      const response = await fetch(
        `${apiUrl}/payment/getSinglePayment?paymentId=${isModalOpen59}`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      const data = await response.json();

      if (data.status === "success") {
        setPdfViews(data.data);
      } else {
        console.error(
          "API response error:",
          data.message || "Invalid companyList"
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getPdfViews();
  }, [isModalOpen59]);

  useEffect(() => {
    getEmppps();
  }, []);

  useEffect(() => {
    async function getEmpppss() {
      const url = `${apiUrl}/eoi/getApplicantInfo/${empid}`;
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      response = await response.json();

      if (response.status === "success") {
        setEmployee2(response.data?.plan?.id);
      }
    }
    getEmpppss();
  }, []);

  // bank api
  useEffect(() => {
    fetch(`${apiUrl}/bank/accountDropdown`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setProject(data.data);
        } else {
          console.error(
            "API response is not in the expected format for countries."
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  //Boss a

  useEffect(() => {
    const Token = localStorage.getItem("Token");
    console.log("Token:", Token);

    fetch(`${apiUrl}/employee/allEmpDesig`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setReportingBossA(data.data);
        } else {
          console.error("API response does not contain an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender options:", error);
      });
  }, []);

  useEffect(() => {
    async function getEmp() {
      const Token = localStorage.getItem("Token");
      let response = await fetch(`${apiUrl}/employee/employee`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      response = await response.json();

      if (response.status === "success") {
        setEmployee(response.data);
      }
    }
    getEmp();
  }, []);

  const handleInputChange2 = (e) => {
    if (!disableInput2) {
      setFormData({ ...formData, basicPriceFPP: e.target.value });
    }
  };

  const handleFileChange15 = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const applicantImageFile = files[0];

      if (applicantImageFile.type.startsWith("image/")) {
        setFormData((prevData) => ({
          ...prevData,
          uploadRecipt: applicantImageFile,
        }));
      } else if (applicantImageFile.type === "application/pdf") {
        // Handle PDF files
        setFormData((prevData) => ({
          ...prevData,
          uploadRecipt: applicantImageFile,
        }));
      } else {
        console.log("Unsupported file type");
      }
    } else {
      console.log("No file selected");
    }
  };

  const handleFileChangeNoc = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      const applicantImageFile = files[0];

      if (applicantImageFile.type.startsWith("image/")) {
        setFormDataNoc((prevData) => ({
          ...prevData,
          uploadRecipt: applicantImageFile,
        }));
      } else if (applicantImageFile.type === "application/pdf") {
        // Handle PDF files
        setFormDataNoc((prevData) => ({
          ...prevData,
          uploadRecipt: applicantImageFile,
        }));
      } else {
        console.log("Unsupported file type");
      }
    } else {
      console.log("No file selected");
    }
  };

  const checkChequeDuplicacy = async () => {
    if (formData.collectionMode === "Cheque" && formData.chequeNo) {
      try {
        const response = await fetch(
          `${apiUrl}/payment/checkChequeDuplicacy?chequeNo=${formData.chequeNo}&applicantId=${empid}`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${Token}` },
          }
        );
        const result = await response.json();
        if (result.data) {
          setIsChequeDuplicate(true);
        } else {
          handleSubmit();
        }
      } catch (error) {
        toast.error("Error checking cheque duplicacy");
      }
    } else {
      handleSubmit();
    }
  };

  const checkChequeDuplicacyNoc = async () => {
    if (formData.collectionMode === "Cheque" && formData.chequeNo) {
      try {
        const response = await fetch(
          `${apiUrl}/registrypayment/checkChequeDuplicacy?chequeNo=${formData.chequeNo}&applicantId=${empid}`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${Token}` },
          }
        );
        const result = await response.json();
        if (result.data) {
          setIsChequeDuplicate(true);
        } else {
          handleSubmit();
        }
      } catch (error) {
        toast.error("Error checking cheque duplicacy");
      }
    } else {
      handleSubmitNoc();
    }
  };

  const sheduleRegistryHandler = (e) => {
    const { name, value, files } = e.target;
    // setFormDataRegistry((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));

    if (name === "registryImage" && files && files[0]) {
      setFormDataRegistry((prev) => ({
        ...prev,
        registryImage: files[0], // Store the File object (binary)
      }));
    } else {
      setFormDataRegistry((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const submitSheduleResigrty = async () => {
    setSheduleRegistryLoading(true);

    const formData = new FormData();
    formData.append("applicantId", formDataRegistry.applicantId);
    formData.append("registryName", formDataRegistry.registryName);
    formData.append("fatherName", formDataRegistry.fatherName);
    formData.append("registyLocation", formDataRegistry.registyLocation);
    formData.append("registryDate", formDataRegistry.registryDate);
    formData.append("description", formDataRegistry.description || "");
    formData.append("unitNo", formDataRegistry.unitNo || "");

    if (formDataRegistry.registryImage) {
      formData.append("registryImage", formDataRegistry.registryImage); // binary photo
    }

    try {
      const response = await fetch(`${apiUrl}/registry/scheduleRegistry`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Token}`,
          // "Content-Type": "application/json",
        },
        body: formData,
      });

      const data = await response.json();
      console.log("Schedule response:", data);

      if (data.status === "success") {
        toast.success(data.message);
        setIsRegistryScheduleOpens(false);
        setFormDataRegistry(registryInitialFormData);
      } else if (data.status === "error") {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error submitting schedule registry:", error);
      toast.error("An error occurred while scheduling the registry.");
    }
    setSheduleRegistryLoading(false);
  };

  console.log("formDataRegistry...", formDataRegistry);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      setLoadings(true);
      const formDataToSend = new FormData();

      for (const key in formData) {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
        if (key === "deposteToAmrs" && formData[key] !== "") {
          localStorage.setItem("deposteToAmrs", formData[key]);
        }
      }

      const response = await fetch(
        `${apiUrl}/payment/addPayment?applicantId=${empid}}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formDataToSend,
        }
      );

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }

      // Successful submission
      handleCloseModal3(); // Close the modal
      fetchDataFromApi(); // Fetch updated data
      getEmppps(); // Get additional data
      fetchSchemePyaments();
      fetchDataFromApiTwo();
      fetchDataFromApiOne();

      setFormData(initialFormData); // Reset form data
      toast.success(response2.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoadings(false);
    }
  };

  const handleSubmitNoc = async (e) => {
    // e.preventDefault();
    try {
      setLoadings(true);
      const formDataToSend = new FormData();

      for (const key in formDataNoc) {
        if (formDataNoc[key] !== null) {
          formDataToSend.append(key, formDataNoc[key]);
        }
        if (key === "deposteToAmrs" && formDataNoc[key] !== "") {
          localStorage.setItem("deposteToAmrs", formDataNoc[key]);
        }
      }

      const response = await fetch(
        `${apiUrl}/registrypayment/addPayment?applicantId=${empid}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          body: formDataToSend,
        }
      );

      const response2 = await response.json();

      if (response2.status === "error") {
        throw new Error(response2.message);
      }

      // Successful submission
      handleCloseModalNocPayment(); // Close the modal
      fetchDataFromApi(); // Fetch updated data
      getEmppps(); // Get additional data
      fetchSchemePyaments();
      fetchDataFromApiTwo();
      fetchDataFromApiOne();

      setFormDataNoc(initialFormDataNoc); // Reset form data
      toast.success(response2.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoadings(false);
    }
  };

  //gift api
  useEffect(() => {
    fetch(`${apiUrl}/gift/giftDropdown`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data && Array.isArray(data.data)) {
          setGift(data.data);
        } else {
          console.error(
            "API response is not in the expected format for countries."
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  //hold or unhold status
  useEffect(() => {
    const holdStatusFromStorage = localStorage.getItem("holdStatus");
    if (holdStatusFromStorage) {
      const holdStatus = JSON.parse(holdStatusFromStorage);
      setHoldStatus(holdStatus);
    }
  }, []);

  const toggleHoldStatus = (id) => {
    const newHoldStatus = { ...holdStatus };
    newHoldStatus[id] = !newHoldStatus[id];
    setHoldStatus(newHoldStatus);
    localStorage.setItem("holdStatus", JSON.stringify(newHoldStatus));
  };

  useEffect(() => {
    // Prevent scrolling when modal is open
    if (isModalOpen3) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen3]);

  useEffect(() => {
    // Prevent scrolling when modal is open
    if (isModalOpen4) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen4]);

  const fetchDataFromApis = (id) => {
    const isUnhold = !holdStatus[id];
    const url = `${apiUrl}/payment/modifyPaymentLedger?paymentId=${id}&isUnhold=${isUnhold}`;
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setEmployee3(data.data);
          fetchDataFromApi();
          toggleHoldStatus(id);
          const button = document.getElementById(`unholdButton_${id}`);
          if (button) {
            button.textContent = isUnhold ? "Hold" : "Unhold";
            button.classList.toggle("btn-primary", !isUnhold);
            button.classList.toggle("btn-success", isUnhold);
          }
        } else {
          console.error("API request was not successful:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const formatTime2 = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);

    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    return date.toLocaleTimeString("en-IN", options);
  };

  const fetchDataFromApisss = () => {
    fetch(`${apiUrl}/applicant/getUpcomingPayment?applicantId=${empid}`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setPaidAmount(data.paidAmount);
          if (Array.isArray(data.data)) {
            const formattedData = data.data.map((item) => ({
              ...item,
              date: item.date ? formatDateTime(item.date) : null,
              time: item.time ? formatTime2(item.time) : null,
            }));
            setUsers2(formattedData);
          } else {
            console.error(
              "API response does not contain companyList array:",
              data
            );
          }
        } else {
          console.error("API request was not successful:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchDataFromApisss();
  }, []);

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
  };
  const handleInputChangeNoc = (event) => {
    const { name, value } = event.target;
    setFormDataNoc({
      ...formDataNoc,
      [name]: value,
    });
  };

  const formatDateTimes = (dateTimeString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(dateTimeString);
    return date.toLocaleString("en-IN", options);
  };

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const day = date.getDate().toString().padStart(2, "0");
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formatDateTime2 = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const day = date.getDate().toString().padStart(2, "0");
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // liST Payment
  const fetchDataFromApi = () => {
    fetch(`${apiUrl}/payment/getPayment?applicantId=${empid}&isDeleted=false`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setPaidAmount(data.paidAmount);
          if (Array.isArray(data.data)) {
            const formattedData = data.data.map((item) => ({
              ...item,
              formattedDate: item.chequeDate
                ? formatDateTime(item.chequeDate)
                : null,
              formattedDates: item.createdAt
                ? formatDateTimes(item.createdAt)
                : null,
              formattedDate2: item.paymentCredit
                ? formatDateTime2(item.paymentCredit)
                : null,
              bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
              accountNumber: item.amrsAccount
                ? item.amrsAccount.accountNumber
                : null,
              bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
            }));

            setUsers(formattedData);
          } else {
            console.error(
              "API response does not contain companyList array:",
              data
            );
          }
        } else {
          console.error("API request was not successful:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  // Noc payment list
  const fetchDataFromApiNocPayment = () => {
    fetch(
      `${apiUrl}/registrypayment/getPayment?applicantId=${empid}&isDeleted=false`,
      {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setPaidAmount(data.paidAmount);
          if (Array.isArray(data.data)) {
            const formattedData = data.data.map((item) => ({
              ...item,
              formattedDate: item.chequeDate
                ? formatDateTime(item.chequeDate)
                : null,
              formattedDates: item.createdAt
                ? formatDateTimes(item.createdAt)
                : null,
              formattedDate2: item.paymentCredit
                ? formatDateTime2(item.paymentCredit)
                : null,
              bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
              accountNumber: item.amrsAccount
                ? item.amrsAccount.accountNumber
                : null,
              bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
            }));

            setNocPayments(formattedData);
          } else {
            console.error(
              "API response does not contain companyList array:",
              data
            );
          }
        } else {
          console.error("API request was not successful:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchDataFromApiNocPayment();
  }, []);

  const fetchDataFromApiTwo = () => {
    fetch(
      `${apiUrl}/payment/getPayment?applicantId=${empid}&isDeleted=false&checkInHand=true`,
      {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setPayBals(data.paidAmount);
          setPaidAmount(data.paidAmount);
          if (Array.isArray(data.data)) {
            const formattedData = data.data.map((item) => ({
              ...item,
              formattedDate: item.chequeDate
                ? formatDateTime(item.chequeDate)
                : null,
              formattedDates: item.createdAt
                ? formatDateTimes(item.createdAt)
                : null,
              formattedDate2: item.paymentCredit
                ? formatDateTime2(item.paymentCredit)
                : null,
              bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
              accountNumber: item.amrsAccount
                ? item.amrsAccount.accountNumber
                : null,
              bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
            }));

            setUsersTwo(formattedData);
          } else {
            console.error(
              "API response does not contain companyList array:",
              data
            );
          }
        } else {
          console.error("API request was not successful:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const fetchDataFromApiTwoNOC = () => {
    fetch(
      `${apiUrl}/registrypayment/getPayment?applicantId=${empid}&isDeleted=false&checkInHand=true`,
      {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setNOCPayBal2(data.paidAmount);
          setNOCPaidAmount2(data.paidAmount);
          if (Array.isArray(data.data)) {
            const formattedData = data.data.map((item) => ({
              ...item,
              formattedDate: item.chequeDate
                ? formatDateTime(item.chequeDate)
                : null,
              formattedDates: item.createdAt
                ? formatDateTimes(item.createdAt)
                : null,
              formattedDate2: item.paymentCredit
                ? formatDateTime2(item.paymentCredit)
                : null,
              bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
              accountNumber: item.amrsAccount
                ? item.amrsAccount.accountNumber
                : null,
              bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
            }));

            setUsersNOCTwo(formattedData);
          } else {
            console.error(
              "API response does not contain companyList array:",
              data
            );
          }
        } else {
          console.error("API request was not successful:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getReceiptData = async (id) => {
    // setIsModalDueOpens(true);
    try {
      const url = `${apiUrl}/registry/singleCam?camId=${id}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      const response2 = await response.json();
      console.log("response2", response2);
      setReceiptData(response2);

      if (response2.status === "error") {
        throw new Error(response2.message);
      }

      // Open the modal and then close it

      // toast.success(response2.message);
    } catch (error) {
      // toast.error(error.message);
    }
  };

  const getDoneRegistryData = async (id) => {
    console.log(id);
    try {
      setIsDoneRegistryLoading(true);
      const url = `${apiUrl}/registry/registryDone?applicantId=${id}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      const response2 = await response.json();
      console.log("response2", response2);
      // Further code to handle the response
      setIsDoneRegistryLoading(false);

      if (response2.status === "success") {
        toast.success(response2.message);
      }
      if (response2.status === "error") {
        throw new Error(response2.message);
      }
    } catch (error) {
      // Handle errors here
      console.log(error.message);
    }
  };

  const getDueReceiptData = async (id) => {
    console.log(id);
    try {
      setIsDueReceiptDueOpens(true);
      const url = `${apiUrl}/registryLetter/noDueReceipt?camId=${id}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      const response2 = await response.json();
      console.log("response2", response2);
      // Further code to handle the response
      setIsDueReceiptDueOpens(false);

      if (response2.status === "success") {
        toast.success(response2.message);
      }
      if (response2.status === "error") {
        throw new Error(response2.message);
      }
    } catch (error) {
      // Handle errors here
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getDueMaintenanceReceiptData = async (id) => {
    console.log(id);
    try {
      setIsMaintenanceReceiptDueOpens(true);
      const url = `${apiUrl}/registryLetter/sendMaintenaceReceipt?camId=${id}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      const response2 = await response.json();
      console.log("response2", response2);
      // Further code to handle the response
      setIsMaintenanceReceiptDueOpens(false);

      if (response2.status === "success") {
        toast.success(response2.message);
      }
      if (response2.status === "error") {
        throw new Error(response2.message);
      }
    } catch (error) {
      // Handle errors here
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getNameChangeReceiptData = async (id) => {
    try {
      setIsNameChangeReceiptDueOpens(true);
      const url = `${apiUrl}/registryLetter/nameChangeReceipt?camId=${id}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      const response2 = await response.json();
      console.log("response2", response2);
      // Further code to handle the response
      setIsNameChangeReceiptDueOpens(false);

      if (response2.status === "success") {
        toast.success(response2.message);
      }
      if (response2.status === "error") {
        throw new Error(response2.message);
      }
    } catch (error) {
      // Handle errors here
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getCheckBounceReceiptData = async (id) => {
    try {
      setIsCheckBounceReceiptDueOpens(true);
      const url = `${apiUrl}/registryLetter/chequeBounceReceipt?camId=${id}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      const response2 = await response.json();
      console.log("response2", response2);
      // Further code to handle the response

      if (response2.status === "success") {
        toast.success(response2.message);
      }
      if (response2.status === "error") {
        throw new Error(response2.message);
      }
    } catch (error) {
      // Handle errors here
      console.log(error.message);
      toast.error(error.message);
    }
    setIsCheckBounceReceiptDueOpens(false);
  };

  const getInterestReceiptData = async (id) => {
    try {
      setIsInterestReceiptDueOpens(true);
      const url = `${apiUrl}/registryLetter/intrestReceipt?camId=${id}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      const response2 = await response.json();
      console.log("response2", response2);
      // Further code to handle the response

      if (response2.status === "success") {
        toast.success(response2.message);
      }
      if (response2.status === "error") {
        throw new Error(response2.message);
      }
    } catch (error) {
      // Handle errors here
      console.log(error.message);
      toast.error(error.message);
    }
    setIsInterestReceiptDueOpens(false);
  };

  const getGSTReceiptData = async (id) => {
    try {
      setIsGSTReceiptDueOpens(true);
      const url = `${apiUrl}/registryLetter/gstInvoiceReceipt?camId=${id}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      const response2 = await response.json();
      console.log("response2", response2);
      // Further code to handle the response

      if (response2.status === "success") {
        toast.success(response2.message);
      }
      if (response2.status === "error") {
        throw new Error(response2.message);
      }
    } catch (error) {
      // Handle errors here
      console.log(error.message);
      toast.error(error.message);
    }
    setIsGSTReceiptDueOpens(false);
  };

  useEffect(() => {
    const camId = employee4?.camId;
    if (camId) {
      getReceiptData(camId);
    } else {
      console.log("camId is not available");
    }
  }, [employee4]);

  console.log("employee4?.campId..", employee4?.camId);

  console.log("receiptData...", receiptData);

  useEffect(() => {
    fetchDataFromApiTwo();
    fetchDataFromApiTwoNOC();
    getReceiptData();
  }, []);

  const fetchDataFromApiOne = () => {
    fetch(`${apiUrl}/payment/getPayment?applicantId=${empid}&isDeleted=true`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setPayBal(data.paidAmount);
          setPaidAmount(data.paidAmount);
          if (Array.isArray(data.data)) {
            const formattedData = data.data.map((item) => ({
              ...item,
              formattedDate: item.chequeDate
                ? formatDateTime(item.chequeDate)
                : null,
              formattedDates: item.createdAt
                ? formatDateTimes(item.createdAt)
                : null,
              formattedDate2: item.paymentCredit
                ? formatDateTime2(item.paymentCredit)
                : null,
              bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
              accountNumber: item.amrsAccount
                ? item.amrsAccount.accountNumber
                : null,
              bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
            }));

            setUsersOne(formattedData);
          } else {
            console.error(
              "API response does not contain companyList array:",
              data
            );
          }
        } else {
          console.error("API request was not successful:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const fetchDataFromApiOneNOC = () => {
    fetch(
      `${apiUrl}/registrypayment/getPayment?applicantId=${empid}&isDeleted=true`,
      {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setNOCPayBal(data.paidAmount);
          setNOCPaidAmount(data.paidAmount);
          if (Array.isArray(data.data)) {
            const formattedData = data.data.map((item) => ({
              ...item,
              formattedDate: item.chequeDate
                ? formatDateTime(item.chequeDate)
                : null,
              formattedDates: item.createdAt
                ? formatDateTimes(item.createdAt)
                : null,
              formattedDate2: item.paymentCredit
                ? formatDateTime2(item.paymentCredit)
                : null,
              bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
              accountNumber: item.amrsAccount
                ? item.amrsAccount.accountNumber
                : null,
              bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
            }));

            setUsersNOCOne(formattedData);
          } else {
            console.error(
              "API response does not contain companyList array:",
              data
            );
          }
        } else {
          console.error("API request was not successful:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchDataFromApiOne();
    fetchDataFromApiOneNOC();
  }, []);

  //  Payment History
  const fetchPaymentHistory = () => {
    fetch(`${apiUrl}/payment/getPaymentUpdateHistory?paymentId=${idssss}`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setPaidAmount(data.paidAmount);
          if (Array.isArray(data.data)) {
            const formattedData = data.data.map((item) => ({
              ...item,
              formattedDate: item.chequeDate
                ? formatDateTime(item.chequeDate)
                : null,
              formattedDates: item.createdAt
                ? formatDateTimes(item.createdAt)
                : null,
              formattedDate2: item.paymentCredit
                ? formatDateTime2(item.paymentCredit)
                : null,
              bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
              accountNumber: item.amrsAccount
                ? item.amrsAccount.accountNumber
                : null,
              bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
            }));

            setUserss(formattedData);
          } else {
            console.error(
              "API response does not contain companyList array:",
              data
            );
          }
        } else {
          console.error("API request was not successful:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchPaymentHistory();
  }, [idssss]);

  async function deleteLeads(id) {
    const url = `${apiUrl}/payment/changeChequeStatus?paymentId=${id}`;

    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    response = await response.json();

    if (response.status === "success") {
      toast.success(response.message);
      fetchDataFromApiTwo();

      fetchDataFromApi();
    } else {
      toast.error(response.message);
    }
  }
  async function holdPayment(id) {
    const url = `${apiUrl}/payment/holdUnholdCheque?paymentId=${id}&status=Hold`;

    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    response = await response.json();

    if (response.status === "success") {
      toast.success(response.message);
      fetchDataFromApiTwo();
      fetchDataFromApi();
    } else {
      toast.error(response.message);
    }
  }

  async function unholdPayment(id) {
    const url = `${apiUrl}/payment/holdUnholdCheque?paymentId=${id}&status=UnHold`;

    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    response = await response.json();

    if (response.status === "success") {
      toast.success(response.message);
      fetchDataFromApiTwo();
      fetchDataFromApi();
    } else {
      toast.error(response.message);
    }
  }

  async function deleteLead() {
    const url = `${apiUrl}/eoi/deletePaymentLedger?paymentId=${holdActionIds}&reason=${formData11.reason}`;

    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    response = await response.json();

    if (response.status === "success") {
      toast.success(response.message);
      fetchDataFromApi();
      getEmppps();
      handleCloseModals4();
    } else {
      toast.error(response.message);
    }
  }
  // noc payment delete
  async function deleteNOCLead() {
    const url = `${apiUrl}/registrypayment/deletePaymentLedger?paymentId=${holdActionNOCIds}&reason=${formDataNOC11.reason}`;

    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    response = await response.json();

    if (response.status === "success") {
      toast.success(response.message);
      fetchDataFromApi();
      getEmppps();
      setFormDataNOC11(initialFormDataNOC11);
      handleCloseModalNocs4();
    } else {
      toast.error(response.message);
    }
  }
  // noc payment delete

  // liST SchemePyament
  const fetchSchemePyament = () => {
    fetch(`${apiUrl}/applicant/getSchemePayment?applicantId=${empid}`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setPaidAmount(data.paidAmount);
          if (Array.isArray(data.data)) {
            const formattedData = data.data.map((item) => ({
              ...item,
              formattedDate: item.chequeDate
                ? formatDateTime(item.chequeDate)
                : null,
              formattedDates: item.createdAt
                ? formatDateTimes(item.createdAt)
                : null,
              formattedDate2: item.paymentCredit
                ? formatDateTime2(item.paymentCredit)
                : null,
              bankName: item.amrsAccount ? item.amrsAccount.bankName : null,
              accountNumber: item.amrsAccount
                ? item.amrsAccount.accountNumber
                : null,
            }));

            setUsers3(formattedData);
          } else {
            console.error(
              "API response does not contain companyList array:",
              data
            );
          }
        } else {
          console.error("API request was not successful:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchSchemePyament();
  }, []);

  const fetchSchemePyaments = () => {
    fetch(`${apiUrl}/applicant/applicantPaymentSchedule?applicantId=${empid}`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setPaidAmount(data.paidAmount);
          if (Array.isArray(data.data)) {
            setUsers4(data.data);
          } else {
            console.error(
              "API response does not contain companyList array:",
              data
            );
          }
        } else {
          console.error("API request was not successful:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    // Dynamically inject the @keyframes into a <style> tag
    const styleSheet = document.styleSheets[0];
    const keyframes = `
              @keyframes growShrink {
                20%, 400% {
                  transform: scale(1);
                }
                50% { 
                  transform: scale(1.1);
                }
              }
            `;

    if (styleSheet) {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
  }, []);

  useEffect(() => {
    fetchSchemePyaments();
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
              <div className="page-header" style={{ marginTop: "-2px" }}>
                <div className="row row-sm" style={{ marginLeft: "-15px" }}>
                  <div className="col-sm-12 col-md-3">
                    <div className="card custom-card">
                      <div className="card-body" style={{ width: "1320px" }}>
                        <div>
                          <h6>CID:{employee4.ticketId}</h6>
                          <h6 style={{ whiteSpace: "nowrap" }}>
                            <span
                              className="fs-20 me-12"
                              style={{ marginBottom: "8px" }}
                            >
                              {employee4.applicantFirstName}{" "}
                              {employee4.applicantLastName}
                            </span>{" "}
                            <span className="badge bg-success">Customer</span>
                          </h6>

                          <span
                            className="text-muted"
                            style={{ display: "inline-block" }}
                          >
                            Phone: {employee4.applicantMobile}
                          </span>
                          <span
                            onClick={handleOpenModal60}
                            style={{
                              color: "blue",
                              display: "inline-block",
                              marginLeft: "90px",
                              fontFamily: "Roboto, sans-serif",
                              cursor: "pointer",
                            }}
                          >
                            Total Unit: {employee4.unitCount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-3 ">
                    <div className="card custom-card">
                      <div className="card-body" style={{ width: "600px" }}>
                        <div>
                          <span
                            style={{ fontSize: "11px", fontWeight: "bold" }}
                          >
                            Project: {employee4.projectId}
                          </span>
                          <h6>
                            <span className="fs-20 me-1">
                              Unit:{employee4.unitNo}
                            </span>
                            <span className="badge bg-danger">Unit</span>
                          </h6>
                          <span className="text-muted">
                            Type: {employee4.schemeType}-- (
                            {(() => {
                              const type = employee4?.inventory?.type;
                              const size = employee4?.inventory?.size;
                              const isDataAvailable = type && size;

                              if (isDataAvailable) {
                                return (
                                  <>
                                    {type === "Plot" || type === "Farmhouse"
                                      ? `${size} SQ YD`
                                      : ""}
                                    {type === "Shop" ? `${size} SQ FT` : ""}
                                  </>
                                );
                              } else {
                                return (
                                  <span style={{ color: "red" }}>N/A</span>
                                );
                              }
                            })()}
                            )
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {employee4.isAllotmentLetter === false && (
                    <div className="col-sm-12 col-md-5">
                      <div
                        className="card custom-card"
                        style={{
                          height: "auto",
                          backgroundColor: "#f8d7da",
                          animation: "growShrink 1.5s infinite ease-in-out",
                        }}
                      >
                        <div className="card-body" style={{ padding: "20px" }}>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              rowGap: "5px",
                              columnGap: "10px",
                            }}
                          >
                            {/* Unit Awarded */}
                            {employee4.resultStatus !== undefined && (
                              <div
                                style={{
                                  flex: "0 0 calc(50% - 10px)", // Adjust for 2 items per row
                                  display: "flex",
                                  alignItems: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span className="fs-14 me-12">
                                  1. Unit Awarded:
                                </span>
                                <span
                                  style={{
                                    color:
                                      employee4.resultStatus === 1
                                        ? "green"
                                        : "red",
                                    fontSize: "16px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`fas ${employee4.resultStatus === 1
                                      ? "fa-check-circle"
                                      : "fa-times-circle"
                                      }`}
                                  ></i>
                                </span>
                              </div>
                            )}

                            {/* First Payment Received */}
                            {employee4.isFirstPaymet !== undefined && (
                              <div
                                style={{
                                  flex: "0 0 calc(50% - 10px)", // Adjust for 2 items per row
                                  display: "flex",
                                  alignItems: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span className="fs-14 me-12">
                                  3. 1st Payment Received:
                                </span>
                                <span
                                  style={{
                                    color: employee4.isFirstPaymet
                                      ? "green"
                                      : "red",
                                    fontSize: "16px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`fas ${employee4.isFirstPaymet
                                      ? "fa-check-circle"
                                      : "fa-times-circle"
                                      }`}
                                  ></i>
                                </span>
                                <span>
                                  {employee4?.isFirstPaymetcollectionMode ===
                                    "Cheque" &&
                                    employee4?.isFirstPaymetcollectionChequeStatus ===
                                    true
                                    ? " (PDC)"
                                    : ""}
                                </span>
                              </div>
                            )}

                            {/* Welcome Letter */}
                            {employee4.isWelcomeLetter !== undefined && (
                              <div
                                style={{
                                  flex: "0 0 calc(50% - 10px)", // Adjust for 2 items per row
                                  display: "flex",
                                  alignItems: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span className="fs-14 me-12">
                                  2. Welcome Letter Sent:
                                </span>
                                <span
                                  style={{
                                    color: employee4.isWelcomeLetter
                                      ? "green"
                                      : "red",
                                    fontSize: "16px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`fas ${employee4.isWelcomeLetter
                                      ? "fa-check-circle"
                                      : "fa-times-circle"
                                      }`}
                                  ></i>
                                </span>
                              </div>
                            )}

                            {/* Allotment Letter */}
                            {employee4.isAllotmentLetter !== undefined && (
                              <div
                                style={{
                                  flex: "0 0 calc(50% - 10px)", // Adjust for 2 items per row
                                  display: "flex",
                                  alignItems: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span className="fs-14 me-12">
                                  4. Allotment Letter Sent:
                                </span>
                                <span
                                  style={{
                                    color: employee4.isAllotmentLetter
                                      ? "green"
                                      : "red",
                                    fontSize: "16px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`fas ${employee4.isAllotmentLetter
                                      ? "fa-check-circle"
                                      : "fa-times-circle"
                                      }`}
                                  ></i>
                                </span>
                                <span>
                                  {employee4.applicantSignature
                                    ? " (Signed)"
                                    : " (Not Signed"}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {employee4.isAllotmentLetter === true && (
                    <div className="col-sm-12 col-md-5">
                      <div
                        className="card custom-card"
                        style={{ height: "105px" }}
                      >
                        <div className="card-body" style={{ padding: "20px" }}>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              rowGap: "5px",
                              columnGap: "10px",
                            }}
                          >
                            {employee4.resultStatus !== undefined && (
                              <div
                                style={{
                                  flex: "0 0 calc(50% - 10px)", // Adjust for 2 items per row
                                  display: "flex",
                                  alignItems: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span className="fs-14 me-12">
                                  1. Unit Awarded:
                                </span>
                                <span
                                  style={{
                                    color:
                                      employee4.resultStatus === 1
                                        ? "green"
                                        : "red",
                                    fontSize: "16px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`fas ${employee4.resultStatus === 1
                                      ? "fa-check-circle"
                                      : "fa-times-circle"
                                      }`}
                                  ></i>
                                </span>
                              </div>
                            )}

                            {/* First Payment Received */}
                            {employee4.isFirstPaymet !== undefined && (
                              <div
                                style={{
                                  flex: "0 0 calc(50% - 10px)", // Adjust for 2 items per row
                                  display: "flex",
                                  alignItems: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span className="fs-14 me-12">
                                  3. 1st Payment Received:
                                </span>
                                <span
                                  style={{
                                    color: employee4.isFirstPaymet
                                      ? "green"
                                      : "red",
                                    fontSize: "16px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`fas ${employee4.isFirstPaymet
                                      ? "fa-check-circle"
                                      : "fa-times-circle"
                                      }`}
                                  ></i>
                                </span>
                                <span>
                                  {employee4?.isFirstPaymetcollectionMode ===
                                    "Cheque" &&
                                    employee4?.isFirstPaymetcollectionChequeStatus ===
                                    true
                                    ? " (PDC)"
                                    : ""}
                                </span>
                              </div>
                            )}

                            {/* Welcome Letter */}
                            {employee4.isWelcomeLetter !== undefined && (
                              <div
                                style={{
                                  flex: "0 0 calc(50% - 10px)", // Adjust for 2 items per row
                                  display: "flex",
                                  alignItems: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span className="fs-14 me-12">
                                  2. Welcome Letter Sent:
                                </span>
                                <span
                                  style={{
                                    color: employee4.isWelcomeLetter
                                      ? "green"
                                      : "red",
                                    fontSize: "16px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`fas ${employee4.isWelcomeLetter
                                      ? "fa-check-circle"
                                      : "fa-times-circle"
                                      }`}
                                  ></i>
                                </span>
                              </div>
                            )}

                            {/* Allotment Letter */}
                            {employee4.isAllotmentLetter !== undefined && (
                              <div
                                style={{
                                  flex: "0 0 calc(50% - 10px)", // Adjust for 2 items per row
                                  display: "flex",
                                  alignItems: "center",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <span className="fs-14 me-12">
                                  4. Allotment Letter Sent:
                                </span>
                                <span
                                  style={{
                                    color: employee4.isAllotmentLetter
                                      ? "green"
                                      : "red",
                                    fontSize: "16px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i
                                    className={`fas ${employee4.isAllotmentLetter
                                      ? "fa-check-circle"
                                      : "fa-times-circle"
                                      }`}
                                  ></i>
                                </span>
                                <span>
                                  {employee4.applicantSignature
                                    ? " (Signed)"
                                    : " (Not Signed)"}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="page-header" style={{ marginTop: "-30px" }}>
                <div className="row row-sm" style={{ marginLeft: "-15px" }}>
                  <div className="col-sm-12 col-md-2 mb-3">
                    <div className="card custom-card">
                      <div className="card-body">
                        <div>
                          <h6>Display Price </h6>
                          <h6>
                            <span
                              className="fs-20 me-1"
                              style={{ color: "orange" }}
                            >
                              {employee4?.initialCost || "0"}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-2 mb-3">
                    <div className="card custom-card">
                      <div className="card-body">
                        <div>
                          <h6>Booking Discount</h6>
                          <h6>
                            <span
                              className="fs-20 me-1"
                              style={{ color: "red" }}
                            >
                              {employee4?.bookingDiscount || "0"}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-2 mb-3">
                    <div className="card custom-card">
                      <div className="card-body" style={{ width: "300px" }}>
                        <div>
                          <h6>Total Amount({employee4?.paymentPlan})</h6>
                          <h6>
                            <span
                              className="fs-20 me-1"
                              style={{ color: "blue" }}
                            >
                              {employee4?.totalCost || "0"}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-2 mb-3">
                    <div className="card custom-card">
                      <div className="card-body" style={{ width: "300px" }}>
                        <div>
                          <h6>Total Received</h6>
                          <h6>
                            <span
                              className="fs-20 me-1"
                              style={{ color: "green" }}
                            >
                              {employee4?.totolReceived || "0"}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-2 mb-3">
                    <div className="card custom-card">
                      <div className="card-body" style={{ width: "200px" }}>
                        <div>
                          <h6>Other Discount</h6>
                          <h6>
                            <span
                              className="fs-20 me-1"
                              style={{ color: "green" }}
                            >
                              {employee4?.discountAmount || "0"}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-2 mb-3">
                    <div className="card custom-card">
                      <div className="card-body" style={{ width: "200px" }}>
                        <div>
                          <h6>Total Due</h6>
                          <h6>
                            <span
                              className="fs-20 me-1"
                              style={{ color: "red" }}
                            >
                              {employee4?.dueAmount || "0"}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  backgroundColor: "var(--primary-bg-color)",
                  padding: "5px 20px",
                  marginTop: "-25px",
                }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#ffffff",
                    fontSize: "-10rem",
                    margin: "0",
                  }}
                >
                  Payment History{" "}
                </h5>
              </div>

              <div className="row row-sm" style={{ width: "101.5%" }}>
                <div className="col-lg-12 col-md-12">
                  <div
                    className="card custom-card main-content-body-profile"
                    style={{
                      width: "100%",
                      margin: "0 auto",
                      padding: "20px",
                    }}
                  >
                    <div
                      className="scroll-container"
                      style={{
                        overflowX: "auto",
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

                      <table>
                        <thead>
                          <tr>
                            <th>Amount Entry</th>
                            <th>Payment Mode</th>
                            <th>Bank Name/Mode</th>
                            <th>Account Number</th>
                            <th>CHQ/TRN No</th>
                            <th>Cheque Date</th>
                            <th>Payment Date</th>
                            <th>Actions</th>
                            <th>Actions Performed By</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.length > 0 ? (
                            users.map((user) => (
                              <tr
                                key={user.id}
                              // style={
                              //     user.isDeleted
                              //         ? {
                              //             textDecoration: "line-through",
                              //             textDecorationColor: "red",
                              //             textDecorationStyle: "solid",
                              //         }
                              //         : {}
                              // }
                              >
                                <td>
                                  {user.amount}
                                  <br />
                                  {user.offeredDiscount ? (
                                    <p>BD: {user.offeredDiscount}</p>
                                  ) : null}
                                </td>
                                <td>{user?.collectionMode}</td>
                                <td>
                                  {user?.collectionMode === "Online" ? (
                                    <>{user?.remark || "N/A"}</>
                                  ) : user?.collectionMode === "Cheque" ? (
                                    <>{user?.deposteToAmrs || "N/A"}</>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>{user.accountNumber || "N/A"}</td>
                                <td>
                                  {user?.collectionMode === "Cheque" ? (
                                    <>
                                      {user?.chequeNo ? user.chequeNo : "N/A"}
                                    </>
                                  ) : user?.collectionMode === "Online" ? (
                                    <>
                                      {user?.transactionNo
                                        ? user.transactionNo
                                        : "N/A"}
                                    </>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>
                                  {user?.collectionMode === "Cheque" ? (
                                    <>
                                      {user?.formattedDate
                                        ? user.formattedDate
                                        : "N/A"}
                                    </>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>{user.formattedDate2 || "N/A"}</td>
                                <td>
                                  {user.isDeleted === true && (
                                    <>
                                      <button
                                        className="btn ripple btn-primary btn-xs"
                                        style={{
                                          marginRight: "6px",
                                          fontSize: "12px",
                                        }}
                                        onClick={() =>
                                          handleOpenModal58(user.id)
                                        }
                                      >
                                        View Reason
                                      </button>
                                    </>
                                  )}

                                  {!user.isDeleted === true && (
                                    <>
                                      {user.collectionMode !== "Discount" ? (
                                        <Link
                                          to={`/view-receipt/${user.id}`}
                                          target="__blank"
                                          className="btn ripple btn-primary btn-xs"
                                          style={{
                                            marginRight: "6px",
                                            fontSize: "12px",
                                            color: "white",
                                          }}
                                        >
                                          Receipt
                                        </Link>
                                      ) : null}

                                      <button
                                        className="btn ripple btn-primary btn-xs"
                                        style={{
                                          marginRight: "6px",
                                          fontSize: "12px",
                                        }}
                                        onClick={() =>
                                          handleOpenModals4(user.id)
                                        }
                                      >
                                        Delete
                                      </button>
                                      <i
                                        className="fa fa-edit"
                                        style={{
                                          cursor: "pointer",
                                          fontSize: "14px",
                                        }}
                                        onClick={() =>
                                          handleOpenModal10(user.id)
                                        }
                                      />
                                      <i
                                        className="fa fa-eye"
                                        style={{
                                          cursor: "pointer",
                                          fontSize: "14px",
                                          marginLeft: "7px",
                                        }}
                                        onClick={() =>
                                          handleOpenModal11(user.id)
                                        }
                                      />
                                      <Link
                                        to={user.uploadRecipt}
                                        title="Receipt"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <i
                                          className="fa fa-eye"
                                          style={{
                                            cursor: "pointer",
                                            fontSize: "14px",
                                            marginLeft: "7px",
                                          }}
                                        />
                                      </Link>
                                    </>
                                  )}
                                </td>
                                <td>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "20px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        marginRight: "5px",
                                      }}
                                    >
                                      <img
                                        src={
                                          user?.employee?.profilePhoto ||
                                          "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                                        }
                                        alt="Profile"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          objectFit: "cover",
                                        }}
                                      />
                                    </div>
                                    <div>
                                      {user?.employee?.fullName}
                                      <br />
                                      {user.formattedDates}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="10">No data available</td>
                            </tr>
                          )}
                        </tbody>

                        <tfoot>
                          <tr>
                            <td className="left-aligned" colSpan={8}>
                              <strong>
                                Total Payment: {employee4.totalCost}
                              </strong>
                            </td>
                            <td className="left-aligned" colSpan={2}>
                              <strong>
                                {" "}
                                Paid Payment: {employee4.amountPayed}
                              </strong>
                              <button
                                className="btn ripple btn-primary btn-xs"
                                style={{ marginLeft: "40px", fontSize: "12px" }}
                                onClick={handleOpenModal3}
                              >
                                Add Payment
                              </button>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  backgroundColor: "var(--primary-bg-color)",
                  padding: "5px 20px",
                  marginTop: "20px",
                }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#ffffff",
                    fontSize: "-10rem",
                    margin: "0",
                  }}
                >
                  Delete Payment History
                </h5>
              </div>

              <div className="row row-sm" style={{ width: "101.5%" }}>
                <div className="col-lg-12 col-md-12">
                  <div
                    className="card custom-card main-content-body-profile"
                    style={{
                      width: "100%",
                      margin: "0 auto",
                      padding: "20px",
                    }}
                  >
                    <div
                      className="scroll-container"
                      style={{
                        overflowX: "auto",
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

                      <table>
                        <thead>
                          <tr>
                            <th>Amount Entry</th>
                            <th>Payment Mode</th>
                            <th>Bank Name/Mode</th>
                            <th>Account Number</th>
                            <th>CHQ/TRN No</th>
                            <th>Cheque Date</th>
                            <th>Payment Date</th>
                            <th>Actions</th>
                            <th>Actions Performed By</th>
                          </tr>
                        </thead>
                        <tbody>
                          {usersOne.length > 0 ? (
                            usersOne.map((user) => (
                              <tr
                                key={user.id}
                              // style={
                              //     user.isDeleted
                              //         ? {
                              //             textDecoration: "line-through",
                              //             textDecorationColor: "red",
                              //             textDecorationStyle: "solid",
                              //         }
                              //         : {}
                              // }
                              >
                                <td>
                                  {user.amount}
                                  <br />
                                  {user.offeredDiscount ? (
                                    <p>BD: {user.offeredDiscount}</p>
                                  ) : null}
                                </td>
                                <td>{user?.collectionMode}</td>
                                <td>
                                  {user?.collectionMode === "Online" ? (
                                    <>{user?.remark || "N/A"}</>
                                  ) : user?.collectionMode === "Cheque" ? (
                                    <>{user?.deposteToAmrs || "N/A"}</>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>{user.accountNumber || "N/A"}</td>
                                <td>
                                  {user?.collectionMode === "Cheque" ? (
                                    <>
                                      {user?.chequeNo ? user.chequeNo : "N/A"}
                                    </>
                                  ) : user?.collectionMode === "Online" ? (
                                    <>
                                      {user?.transactionNo
                                        ? user.transactionNo
                                        : "N/A"}
                                    </>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>
                                  {user?.collectionMode === "Cheque" ? (
                                    <>
                                      {user?.formattedDate
                                        ? user.formattedDate
                                        : "N/A"}
                                    </>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>{user.formattedDate2 || "N/A"}</td>
                                <td>
                                  {user.isDeleted === true && (
                                    <>
                                      <button
                                        className="btn ripple btn-primary btn-xs"
                                        style={{
                                          marginRight: "6px",
                                          fontSize: "12px",
                                        }}
                                        onClick={() =>
                                          handleOpenModal58(user.id)
                                        }
                                      >
                                        View Reason
                                      </button>
                                    </>
                                  )}
                                </td>
                                <td>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "20px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        marginRight: "5px",
                                      }}
                                    >
                                      <img
                                        src={
                                          user?.employee?.profilePhoto ||
                                          "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                                        }
                                        alt="Profile"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          objectFit: "cover",
                                        }}
                                      />
                                    </div>
                                    <div>
                                      {user?.employee?.fullName}
                                      <br />
                                      {user.formattedDates}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="10">No data available</td>
                            </tr>
                          )}
                        </tbody>

                        <tfoot>
                          <tr>
                            <td className="left-aligned" colSpan={8}></td>
                            <td className="left-aligned" colSpan={2}>
                              <strong> Paid Payment: {payBal}</strong>
                            </td>
                          </tr>
                        </tfoot>
                        {/* <tfoot>
                                                    <tr>
                                                        <td className="left-aligned" colSpan={8}>
                                                            <strong>Total Payment: {employee4.totalCost}</strong>
                                                        </td>
                                                        <td className="left-aligned" colSpan={2}>
                                                            <strong> Paid Payment: {employee4.amountPayed}</strong>
                                                           
                                                        </td>
                                                        
                                                    </tr>
                                                </tfoot> */}
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  backgroundColor: "var(--primary-bg-color)",
                  padding: "5px 20px",
                  marginTop: "20px",
                }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#ffffff",
                    fontSize: "-10rem",
                    margin: "0",
                  }}
                >
                  Cheques in Hand
                </h5>
              </div>

              <div className="row row-sm" style={{ width: "101.5%" }}>
                <div className="col-lg-12 col-md-12">
                  <div
                    className="card custom-card main-content-body-profile"
                    style={{
                      width: "100%",
                      margin: "0 auto",
                      padding: "20px",
                    }}
                  >
                    <div
                      className="scroll-container"
                      style={{
                        overflowX: "auto",
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

                      <table>
                        <thead>
                          <tr>
                            <th>Amount Entry</th>
                            <th>Payment Mode</th>
                            <th>Bank Name/Mode</th>
                            <th>Account Number</th>
                            <th>CHQ/TRN No</th>
                            <th>Cheque Date</th>
                            <th>Payment Date</th>
                            <th>Actions</th>
                            <th>Actions Performed By</th>
                          </tr>
                        </thead>
                        <tbody>
                          {usersTwo.length > 0 ? (
                            usersTwo.map((user) => (
                              <tr
                                key={user.id}
                              // style={
                              //     user.isDeleted
                              //         ? {
                              //             textDecoration: "line-through",
                              //             textDecorationColor: "red",
                              //             textDecorationStyle: "solid",
                              //         }
                              //         : {}
                              // }
                              >
                                <td>
                                  {user.amount}
                                  <br />
                                  {user.offeredDiscount ? (
                                    <p>BD: {user.offeredDiscount}</p>
                                  ) : null}
                                </td>
                                <td>{user?.collectionMode}</td>
                                <td>
                                  {user?.collectionMode === "Online" ? (
                                    <>{user?.remark || "N/A"}</>
                                  ) : user?.collectionMode === "Cheque" ? (
                                    <>{user?.deposteToAmrs || "N/A"}</>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>{user.accountNumber || "N/A"}</td>
                                <td>
                                  {user?.collectionMode === "Cheque" ? (
                                    <>
                                      {user?.chequeNo ? user.chequeNo : "N/A"}
                                    </>
                                  ) : user?.collectionMode === "Online" ? (
                                    <>
                                      {user?.transactionNo
                                        ? user.transactionNo
                                        : "N/A"}
                                    </>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>
                                  {user?.collectionMode === "Cheque" ? (
                                    <>
                                      {user?.formattedDate
                                        ? user.formattedDate
                                        : "N/A"}
                                    </>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>{user.formattedDate2 || "N/A"}</td>
                                <td>
                                  {user.isHold === false && (
                                    <button
                                      className="btn ripple btn-primary btn-xs"
                                      style={{
                                        marginRight: "6px",
                                        fontSize: "12px",
                                      }}
                                      onClick={() => deleteLeads(user.id)}
                                    >
                                      Credit
                                    </button>
                                  )}
                                  {user.isHold === false && (
                                    <button
                                      className="btn ripple btn-primary btn-xs"
                                      style={{
                                        marginRight: "6px",
                                        fontSize: "12px",
                                        background: "#3CB371",
                                      }}
                                      onClick={() => holdPayment(user.id)}
                                    >
                                      Hold
                                    </button>
                                  )}
                                  {user.isHold === true && (
                                    <button
                                      className="btn ripple btn-primary btn-xs"
                                      style={{
                                        marginRight: "6px",
                                        fontSize: "12px",
                                        background: "#E30B5C",
                                      }}
                                      onClick={() => unholdPayment(user.id)}
                                    >
                                      Un-hold
                                    </button>
                                  )}
                                  <br />
                                  <br />
                                  {user.isHold === false && (
                                    <button
                                      className="btn ripple btn-primary btn-xs"
                                      style={{
                                        marginRight: "6px",
                                        fontSize: "12px",
                                      }}
                                      onClick={() => handleOpenModals4(user.id)}
                                    >
                                      Delete
                                    </button>
                                  )}
                                  <i
                                    className="fa fa-edit"
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "14px",
                                    }}
                                    onClick={() => handleOpenModal10(user.id)}
                                  />
                                </td>
                                <td>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "20px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        marginRight: "5px",
                                      }}
                                    >
                                      <img
                                        src={
                                          user?.employee?.profilePhoto ||
                                          "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                                        }
                                        alt="Profile"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          objectFit: "cover",
                                        }}
                                      />
                                    </div>
                                    <div>
                                      {user?.employee?.fullName}
                                      <br />
                                      {user.formattedDates}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="10">No data available</td>
                            </tr>
                          )}
                        </tbody>

                        <tfoot>
                          <tr>
                            <td className="left-aligned" colSpan={8}></td>
                            <td className="left-aligned" colSpan={2}>
                              <strong> Paid Payment: {payBals}</strong>
                            </td>
                          </tr>
                        </tfoot>
                        {/* <tfoot>
                                                    <tr>
                                                        <td className="left-aligned" colSpan={8}>
                                                            <strong>Total Payment: {employee4.totalCost}</strong>
                                                        </td>
                                                        <td className="left-aligned" colSpan={2}>
                                                            <strong> Paid Payment: {employee4.amountPayed}</strong>
                                                           
                                                        </td>
                                                        
                                                    </tr>
                                                </tfoot> */}
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`modal ${isModalOpen4 ? "show" : ""}`}
                style={{
                  display: isModalOpen4 ? "block" : "none",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 9999,
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  overflow: "auto",
                }}
                tabIndex="-1"
                role="dialog"
              >
                <div
                  className="modal-dialog modal-dialog-centered modal-sl"
                  role="document"
                  style={{ maxWidth: "300px", margin: "auto" }}
                >
                  <div
                    className="modal-content"
                    style={{
                      borderRadius: "10px",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div
                      className="modal-header"
                      style={{
                        backgroundColor: "#f8f9fa",
                        borderBottom: "1px solid #dee2e6",
                        borderRadius: "10px 10px 0 0",
                      }}
                    >
                      <h5 className="modal-title">Permissions</h5>
                      <button
                        type="button"
                        className="close"
                        aria-label="Close"
                        onClick={handleCloseModal4}
                        style={{ outline: "none", cursor: "pointer" }}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div
                      className="modal-body d-flex justify-content-center align-items-center"
                      style={{ padding: "20px", textAlign: "center" }}
                    >
                      <form>
                        <div className="modal-body">
                          Please confirm if you want to{" "}
                          {holdStatus[holdActionId] ? "unhold" : "hold"} now.
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleCloseModal4}
                            style={{ marginRight: "10px" }}
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

              <div
                style={{
                  marginTop: "20px",
                  width: "100%",
                  backgroundColor: "var(--primary-bg-color)",
                  padding: "5px 20px",
                }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#ffffff",
                    fontSize: "-10rem",
                    margin: "0",
                  }}
                >
                  Scheme payment
                </h5>
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
                    .fixed-width {
                        width: 150px;
                    }
                    .fixed-width-large {
                        width: 200px;
                    }
                    tbody tr.no-data td {
                        text-align: center;
                        padding: 20px;
                        font-size: 16px;
                        font-weight: bold;
                        color: #999;
                    }
                    .left-aligned {
                        text-align: left;
                        padding-left: 10px;
                    }
                    `}
                      </style>

                      <table align="center" width="100%">
                        <thead>
                          <tr>
                            <th className="fixed-width">Amount Entry</th>
                            <th className="fixed-width">Payment Mode</th>
                            <th className="fixed-width">Method</th>
                            <th className="fixed-width">Bank Name/Mode</th>
                            <th className="fixed-width-large">
                              Account Number
                            </th>
                            <th className="fixed-width-large">CHQ/TRN No</th>
                            <th className="fixed-width">Cheque Date</th>
                            <th className="fixed-width">Payment Date</th>
                            <th className="fixed-width-large">Actions</th>
                            <th className="fixed-width">
                              Actions Performed By
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {users3.length > 0 ? (
                            users3.map((user) => (
                              <tr key={user.id}>
                                <td className="fixed-width">{user.amount}</td>
                                <td className="fixed-width">
                                  {user.collectionMode}
                                </td>
                                <td className="fixed-width">
                                  {user.collectionMode === "Online" &&
                                    user.select}
                                  {user.collectionMode === "Cash Deposit" &&
                                    "Cash"}
                                  {user.collectionMode === "Cheque" && "Cheque"}
                                </td>
                                <td className="fixed-width">{user.bankName}</td>
                                <td className="fixed-width-large">
                                  {user.accountNumber}
                                </td>
                                <td className="fixed-width-large">
                                  {user.transactionNo}
                                  {user.chequeNo}
                                </td>
                                <td className="fixed-width">
                                  {user.formattedDate}
                                </td>
                                <td className="fixed-width">
                                  {user.formattedDate2}
                                </td>
                                <td className="fixed-width-large">
                                  <Link
                                    to={`/view-receipt/${user.id}`}
                                    target="_blank"
                                    className="btn ripple btn-primary btn-xs"
                                    style={{ marginRight: "8px" }}
                                  >
                                    View Receipt
                                  </Link>
                                  <button
                                    type="button"
                                    id={`unholdButton_${user.id}`}
                                    className={`btn ripple btn-${holdStatus[user.id]
                                      ? "success"
                                      : "primary"
                                      } btn-xs`}
                                    style={{ marginRight: "8px" }}
                                    onClick={() => {
                                      handleOpenModal4(user.id);
                                    }}
                                  >
                                    {holdStatus[user.id] ? "Hold" : "Unhold"}
                                  </button>
                                  <button
                                    className="btn ripple btn-primary btn-xs"
                                    style={{ marginRight: "8px" }}
                                  >
                                    Delete
                                  </button>
                                  <a>
                                    <i
                                      className="fa fa-edit"
                                      style={{ cursor: "pointer" }}
                                    />
                                  </a>
                                </td>
                                <td className="fixed-width-large">
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "20px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        marginRight: "5px",
                                      }}
                                    >
                                      <img
                                        src={
                                          employee4.profilePhoto ||
                                          "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                                        }
                                        alt="Profile"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          objectFit: "cover",
                                        }}
                                      />
                                    </div>
                                    <div>
                                      {employee4.fullName}
                                      <br />
                                      {user.formattedDates}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr className="no-data">
                              <td className="fixed-width" colSpan="10">
                                No data available
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* noc payment history */}
              <div
                style={{
                  width: "100%",
                  backgroundColor: "skyblue",
                  padding: "5px 20px",
                  marginTop: "20px",
                  // border: "10px solid black",
                }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#ffffff",
                    fontSize: "-10rem",
                    margin: "0",
                  }}
                >
                  NOC Payment History{" "}
                </h5>
              </div>

              <div className="row row-sm" style={{ width: "101.5%" }}>
                <div className="col-lg-12 col-md-12">
                  <div
                    className="card custom-card main-content-body-profile"
                    style={{
                      width: "100%",
                      margin: "0 auto",
                      padding: "20px",
                    }}
                  >
                    <div
                      className="scroll-container"
                      style={{
                        overflowX: "auto",
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

                      <table>
                        <thead>
                          <tr>
                            <th>Amount Entry</th>
                            <th>Payment For</th>
                            <th>Payment Mode</th>
                            <th>Bank Name/Mode</th>
                            <th>Account Number</th>
                            <th>CHQ/TRN No</th>
                            <th>Cheque Date</th>
                            <th>Payment Date</th>
                            <th>Actions</th>
                            <th>Actions Performed By</th>
                          </tr>
                        </thead>
                        <tbody>
                          {nocPayments.length > 0 ? (
                            nocPayments.map((user) => (
                              <tr
                                key={user.id}
                              // style={
                              //     user.isDeleted
                              //         ? {
                              //             textDecoration: "line-through",
                              //             textDecorationColor: "red",
                              //             textDecorationStyle: "solid",
                              //         }
                              //         : {}
                              // }
                              >
                                <td>
                                  {user.amount}
                                  <br />
                                  {user.offeredDiscount ? (
                                    <p>BD: {user.offeredDiscount}</p>
                                  ) : null}
                                </td>
                                <td>
                                  {user.paymentFor}
                                </td>
                                <td>{user?.collectionMode}</td>
                                <td>
                                  {user?.collectionMode === "Online" ? (
                                    <>{user?.remark || "N/A"}</>
                                  ) : user?.collectionMode === "Cheque" ? (
                                    <>{user?.deposteToAmrs || "N/A"}</>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>{user.accountNumber || "N/A"}</td>
                                <td>
                                  {user?.collectionMode === "Cheque" ? (
                                    <>
                                      {user?.chequeNo ? user.chequeNo : "N/A"}
                                    </>
                                  ) : user?.collectionMode === "Online" ? (
                                    <>
                                      {user?.transactionNo
                                        ? user.transactionNo
                                        : "N/A"}
                                    </>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>
                                  {user?.collectionMode === "Cheque" ? (
                                    <>
                                      {user?.formattedDate
                                        ? user.formattedDate
                                        : "N/A"}
                                    </>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>{user.formattedDate2 || "N/A"}</td>
                                <td>
                                  {user.isDeleted === true && (
                                    <>
                                      <button
                                        className="btn ripple btn-primary btn-xs"
                                        style={{
                                          marginRight: "6px",
                                          fontSize: "12px",
                                        }}
                                        onClick={() =>
                                          handleOpenModal58(user.id)
                                        }
                                      >
                                        View Reason
                                      </button>
                                    </>
                                  )}

                                  {!user.isDeleted === true && (
                                    <>
                                      {/* {user.collectionMode !== "Discount" ? (
                                        <Link
                                          to={`/view-receipt/${user.id}`}
                                          target="__blank"
                                          className="btn ripple btn-primary btn-xs"
                                          style={{
                                            marginRight: "6px",
                                            fontSize: "12px",
                                            color: "white",
                                          }}
                                        >
                                          Receipt
                                        </Link>
                                      ) : null} */}


                                      {/* <i
                                        className="fa fa-edit"
                                        style={{
                                          cursor: "pointer",
                                          fontSize: "14px",
                                        }}
                                        onClick={() =>
                                          handleOpenModal10(user.id)
                                        }
                                      /> */}

                                      <button className="btn btn-primary btn-sm"
                                        onClick={() => handleOpenModalNocs4(user.id)}>
                                        Delete
                                      </button>
                                      {/* className="fa fa-edit"
                                        style={{
                                          cursor: "pointer",
                                          fontSize: "14px",
                                        }}
                                        onClick={() =>
                                          handleOpenModal10(user.id)
                                        } */}

                                      {/* <i
                                        className="fa fa-eye"
                                        style={{
                                          cursor: "pointer",
                                          fontSize: "14px",
                                          marginLeft: "7px",
                                        }}
                                        onClick={() =>
                                          handleOpenModal11(user.id)
                                        }
                                      /> */}
                                      <Link
                                        to={user.uploadRecipt}
                                        title="Receipt"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <i
                                          className="fa fa-eye"
                                          style={{
                                            cursor: "pointer",
                                            fontSize: "14px",
                                            marginLeft: "7px",
                                          }}
                                        />
                                      </Link>
                                    </>
                                  )}
                                </td>
                                <td>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "20px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        marginRight: "5px",
                                      }}
                                    >
                                      <img
                                        src={
                                          user?.employee?.profilePhoto ||
                                          "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                                        }
                                        alt="Profile"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          objectFit: "cover",
                                        }}
                                      />
                                    </div>
                                    <div>
                                      {user?.employee?.fullName}
                                      <br />
                                      {user.formattedDates}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="10">No data available</td>
                            </tr>
                          )}
                        </tbody>

                        <tfoot>
                          <tr>
                            <td className="left-aligned" colSpan={8}>
                              <strong>
                                Total Payment:{" "}
                                {receiptData?.data?.finalNocAmount}
                              </strong>
                            </td>
                            <td className="left-aligned" colSpan={2}>
                              <strong>
                                {" "}
                                Paid Payment: {
                                  (Array.isArray(nocPayments)
                                    ? nocPayments
                                      .filter((item) => item.collectionMode !== "Discount")
                                      .reduce((total, item) => total + (item?.amount || 0), 0)
                                    : 0)
                                }
                              </strong>
                              <button
                                className="btn ripple btn-primary btn-xs"
                                style={{
                                  marginLeft: "40px",
                                  fontSize: "12px",
                                  //   color: "skyblue",
                                }}
                                onClick={handleOpenModaNocPayment}
                              >
                                Add Payment
                              </button>
                            </td>
                          </tr>
                          <tr>
                            {/* <td className="left-aligned" colSpan={1}>
                             
                            </td> */}

                            <td className="left-aligned" colSpan={12}>
                              {/* send Cam Email */}
                              <button
                                className={`btn ripple  btn-xs`}
                                style={{
                                  marginLeft: "40px",
                                  fontSize: "12px",
                                  backgroundColor: `${true ? "#FFA3A6" : "rgb(3, 40, 82)"
                                    }`,
                                  color: `${true ? "black" : "white"}`,
                                }}
                                onClick={() =>
                                  handleSendNocEmail(
                                    employee4.camId
                                  )}
                              >
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/869/869647.png"
                                  alt="icon"
                                  style={{
                                    width: "12px",
                                    height: "12px",
                                    marginRight: "5px",
                                  }}
                                />
                                CAM Email &rarr;
                              </button>

                              {/* cheque bounce */}
                              <button
                                className={`btn ripple  btn-xs`}
                                style={{
                                  marginLeft: "40px",
                                  fontSize: "12px",
                                  backgroundColor: `${true ? "#FFA3A6" : "rgb(3, 40, 82)"
                                    }`,
                                  color: `${true ? "black" : "white"}`,
                                }}
                                onClick={() => setIsModalChequeOpens(true)}
                              >
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/869/869647.png"
                                  alt="icon"
                                  style={{
                                    width: "12px",
                                    height: "12px",
                                    marginRight: "5px",
                                  }}
                                />
                                Cheque Bounce &rarr;
                              </button>

                              {/* Name Change */}
                              <button
                                className="btn ripple btn-primary btn-xs"
                                style={{
                                  marginLeft: "40px",
                                  fontSize: "12px",
                                  backgroundColor: `${true ? "#FFA3A6" : "rgb(3, 40, 82)"
                                    }`,
                                  color: `${true ? "black" : "white"}`,
                                }}
                                onClick={() => setIsModalNameChangeOpens(true)}
                              >
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/869/869647.png"
                                  alt="icon"
                                  style={{
                                    width: "12px",
                                    height: "12px",
                                    marginRight: "5px",
                                  }}
                                />
                                Name Change &rarr;
                              </button>

                              {/* Maintenance */}
                              <button
                                className="btn ripple btn-primary btn-xs"
                                style={{
                                  marginLeft: "40px",
                                  fontSize: "12px",
                                  backgroundColor: `${true ? "#FFA3A6" : "rgb(3, 40, 82)"
                                    }`,
                                  color: `${true ? "black" : "white"}`,
                                }}
                                onClick={() => setIsModalMaintenanceOpens(true)}
                              >
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/869/869647.png"
                                  alt="icon"
                                  style={{
                                    width: "12px",
                                    height: "12px",
                                    marginRight: "5px",
                                  }}
                                />
                                Maintenance &rarr;
                              </button>

                              {/* Interest */}
                              <button
                                className="btn ripple btn-primary btn-xs"
                                style={{
                                  marginLeft: "40px",
                                  fontSize: "12px",
                                  backgroundColor: `${true ? "#FFA3A6" : "rgb(3, 40, 82)"
                                    }`,
                                  color: `${true ? "black" : "white"}`,
                                }}
                                onClick={() => setIsModalInterestOpens(true)}
                              >
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/869/869647.png"
                                  alt="icon"
                                  style={{
                                    width: "12px",
                                    height: "12px",
                                    marginRight: "5px",
                                  }}
                                />
                                Interest &rarr;
                              </button>

                              {/* gst */}
                              <button
                                className="btn ripple btn-primary btn-xs"
                                style={{
                                  marginLeft: "40px",
                                  fontSize: "12px",
                                  backgroundColor: `${true ? "#FFA3A6" : "rgb(3, 40, 82)"
                                    }`,
                                  color: `${true ? "black" : "white"}`,
                                }}
                                onClick={() => setIsModalGSTOpens(true)}
                              >
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/869/869647.png"
                                  alt="icon"
                                  style={{
                                    width: "12px",
                                    height: "12px",
                                    marginRight: "5px",
                                  }}
                                />
                                GST &rarr;
                              </button>

                              {/* no due */}
                              <button
                                className="btn ripple btn-primary btn-xs"
                                style={{
                                  marginLeft: "40px",
                                  fontSize: "12px",
                                  backgroundColor: `${true ? "#FFA3A6" : "rgb(3, 40, 82)"
                                    }`,
                                  color: `${true ? "black" : "white"}`,
                                }}
                                onClick={() => setIsModalDueOpens(true)}
                              >
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/869/869647.png"
                                  alt="icon"
                                  style={{
                                    width: "12px",
                                    height: "12px",
                                    marginRight: "5px",
                                  }}
                                />
                                No Dues &rarr;
                              </button>

                              {/* Schedule Registry */}
                              <button
                                className="btn ripple btn-primary btn-xs"
                                style={{
                                  marginLeft: "40px",
                                  fontSize: "12px",
                                  backgroundColor: `${true ? "#FFA3A6" : "rgb(3, 40, 82)"
                                    }`,
                                  color: `${true ? "black" : "white"}`,
                                }}
                                onClick={() => setIsRegistryScheduleOpens(true)}
                              >
                                Schedule Registry &rarr;
                              </button>

                              {/* Done Registry */}
                              <button
                                className="btn ripple btn-primary btn-xs"
                                style={{
                                  marginLeft: "40px",
                                  fontSize: "12px",
                                  backgroundColor: `${true ? "#FFA3A6" : "rgb(3, 40, 82)"
                                    }`,
                                  color: `${true ? "black" : "white"}`,
                                }}
                                onClick={() =>
                                  getDoneRegistryData(employee4?.id)
                                }
                              >
                                {isDoneRegistryLoading
                                  ? "Loading..."
                                  : "Done Registry"}
                              </button>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* noc delete  payment history */}
              <div
                style={{
                  width: "100%",
                  backgroundColor: "skyblue",
                  padding: "5px 20px",
                  marginTop: "20px",
                  // border: "10px solid black",
                }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#ffffff",
                    fontSize: "-10rem",
                    margin: "0",
                  }}
                >
                  Delete NOC Payment History
                </h5>
              </div>

              <div className="row row-sm" style={{ width: "101.5%" }}>
                <div className="col-lg-12 col-md-12">
                  <div
                    className="card custom-card main-content-body-profile"
                    style={{
                      width: "100%",
                      margin: "0 auto",
                      padding: "20px",
                    }}
                  >
                    <div
                      className="scroll-container"
                      style={{
                        overflowX: "auto",
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

                      <table>
                        <thead>
                          <tr>
                            <th>Amount Entry</th>
                            <th>Payment Mode</th>
                            <th>Bank Name/Mode</th>
                            <th>Account Number</th>
                            <th>CHQ/TRN No</th>
                            <th>Cheque Date</th>
                            <th>Payment Date</th>
                            <th>Actions</th>
                            <th>Actions Performed By</th>
                          </tr>
                        </thead>
                        <tbody>
                          {usersNOCOne.length > 0 ? (
                            usersNOCOne.map((user) => (
                              <tr
                                key={user.id}
                              // style={
                              //     user.isDeleted
                              //         ? {
                              //             textDecoration: "line-through",
                              //             textDecorationColor: "red",
                              //             textDecorationStyle: "solid",
                              //         }
                              //         : {}
                              // }
                              >
                                <td>
                                  {user.amount}
                                  <br />
                                  {user.offeredDiscount ? (
                                    <p>BD: {user.offeredDiscount}</p>
                                  ) : null}
                                </td>
                                <td>{user?.collectionMode}</td>
                                <td>
                                  {user?.collectionMode === "Online" ? (
                                    <>{user?.remark || "N/A"}</>
                                  ) : user?.collectionMode === "Cheque" ? (
                                    <>{user?.deposteToAmrs || "N/A"}</>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>{user.accountNumber || "N/A"}</td>
                                <td>
                                  {user?.collectionMode === "Cheque" ? (
                                    <>
                                      {user?.chequeNo ? user.chequeNo : "N/A"}
                                    </>
                                  ) : user?.collectionMode === "Online" ? (
                                    <>
                                      {user?.transactionNo
                                        ? user.transactionNo
                                        : "N/A"}
                                    </>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>
                                  {user?.collectionMode === "Cheque" ? (
                                    <>
                                      {user?.formattedDate
                                        ? user.formattedDate
                                        : "N/A"}
                                    </>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>{user.formattedDate2 || "N/A"}</td>
                                <td>
                                  {user.isDeleted === true && (
                                    <>
                                      <button
                                        className="btn ripple btn-primary btn-xs"
                                        style={{
                                          marginRight: "6px",
                                          fontSize: "12px",
                                        }}
                                        onClick={() =>
                                          handleOpenModal58(user.id)
                                        }
                                      >
                                        View Reason
                                      </button>
                                    </>
                                  )}
                                </td>
                                <td>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "20px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        marginRight: "5px",
                                      }}
                                    >
                                      <img
                                        src={
                                          user?.employee?.profilePhoto ||
                                          "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                                        }
                                        alt="Profile"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          objectFit: "cover",
                                        }}
                                      />
                                    </div>
                                    <div>
                                      {user?.employee?.fullName}
                                      <br />
                                      {user.formattedDates}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="10">No data available</td>
                            </tr>
                          )}
                        </tbody>

                        <tfoot>
                          <tr>
                            <td className="left-aligned" colSpan={8}></td>
                            <td className="left-aligned" colSpan={2}>
                              <strong> Paid Payment: {payNOCBal}</strong>
                            </td>
                          </tr>
                        </tfoot>
                        {/* <tfoot>
                                                    <tr>
                                                        <td className="left-aligned" colSpan={8}>
                                                            <strong>Total Payment: {employee4.totalCost}</strong>
                                                        </td>
                                                        <td className="left-aligned" colSpan={2}>
                                                            <strong> Paid Payment: {employee4.amountPayed}</strong>
                                                           
                                                        </td>
                                                        
                                                    </tr>
                                                </tfoot> */}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* noc delete  payment history */}

              {/* NOC Cheques in Hand */}
              <div
                style={{
                  width: "100%",
                  backgroundColor: "skyblue",
                  padding: "5px 20px",
                  marginTop: "20px",
                  // border: "10px solid black",
                }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#ffffff",
                    fontSize: "-10rem",
                    margin: "0",
                  }}
                >
                  NOC Cheques in Hand
                </h5>
              </div>

              <div className="row row-sm" style={{ width: "101.5%" }}>
                <div className="col-lg-12 col-md-12">
                  <div
                    className="card custom-card main-content-body-profile"
                    style={{
                      width: "100%",
                      margin: "0 auto",
                      padding: "20px",
                    }}
                  >
                    <div
                      className="scroll-container"
                      style={{
                        overflowX: "auto",
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

                      <table>
                        <thead>
                          <tr>
                            <th>Amount Entry</th>
                            <th>Payment Mode</th>
                            <th>Bank Name/Mode</th>
                            <th>Account Number</th>
                            <th>CHQ/TRN No</th>
                            <th>Cheque Date</th>
                            <th>Payment Date</th>
                            <th>Actions</th>
                            <th>Actions Performed By</th>
                          </tr>
                        </thead>
                        <tbody>
                          {usersNOCTwo.length > 0 ? (
                            usersNOCTwo.map((user) => (
                              <tr
                                key={user.id}
                              // style={
                              //     user.isDeleted
                              //         ? {
                              //             textDecoration: "line-through",
                              //             textDecorationColor: "red",
                              //             textDecorationStyle: "solid",
                              //         }
                              //         : {}
                              // }
                              >
                                <td>
                                  {user.amount}
                                  <br />
                                  {user.offeredDiscount ? (
                                    <p>BD: {user.offeredDiscount}</p>
                                  ) : null}
                                </td>
                                <td>{user?.collectionMode}</td>
                                <td>
                                  {user?.collectionMode === "Online" ? (
                                    <>{user?.remark || "N/A"}</>
                                  ) : user?.collectionMode === "Cheque" ? (
                                    <>{user?.deposteToAmrs || "N/A"}</>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>{user.accountNumber || "N/A"}</td>
                                <td>
                                  {user?.collectionMode === "Cheque" ? (
                                    <>
                                      {user?.chequeNo ? user.chequeNo : "N/A"}
                                    </>
                                  ) : user?.collectionMode === "Online" ? (
                                    <>
                                      {user?.transactionNo
                                        ? user.transactionNo
                                        : "N/A"}
                                    </>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>
                                  {user?.collectionMode === "Cheque" ? (
                                    <>
                                      {user?.formattedDate
                                        ? user.formattedDate
                                        : "N/A"}
                                    </>
                                  ) : (
                                    <>N/A</>
                                  )}
                                </td>
                                <td>{user.formattedDate2 || "N/A"}</td>
                                <td>
                                  {user.isHold === false && (
                                    <button
                                      className="btn ripple btn-primary btn-xs"
                                      style={{
                                        marginRight: "6px",
                                        fontSize: "12px",
                                      }}
                                      onClick={() => deleteLeads(user.id)}
                                    >
                                      Credit
                                    </button>
                                  )}
                                  {user.isHold === false && (
                                    <button
                                      className="btn ripple btn-primary btn-xs"
                                      style={{
                                        marginRight: "6px",
                                        fontSize: "12px",
                                        background: "#3CB371",
                                      }}
                                      onClick={() => holdPayment(user.id)}
                                    >
                                      Hold
                                    </button>
                                  )}
                                  {user.isHold === true && (
                                    <button
                                      className="btn ripple btn-primary btn-xs"
                                      style={{
                                        marginRight: "6px",
                                        fontSize: "12px",
                                        background: "#E30B5C",
                                      }}
                                      onClick={() => unholdPayment(user.id)}
                                    >
                                      Un-hold
                                    </button>
                                  )}
                                  <br />
                                  <br />
                                  {user.isHold === false && (
                                    <button
                                      className="btn ripple btn-primary btn-xs"
                                      style={{
                                        marginRight: "6px",
                                        fontSize: "12px",
                                      }}
                                      onClick={() => handleOpenModals4(user.id)}
                                    >
                                      Delete
                                    </button>
                                  )}
                                  <i
                                    className="fa fa-edit"
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "14px",
                                    }}
                                    onClick={() => handleOpenModal10(user.id)}
                                  />
                                </td>
                                <td>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "20px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                        marginRight: "5px",
                                      }}
                                    >
                                      <img
                                        src={
                                          user?.employee?.profilePhoto ||
                                          "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                                        }
                                        alt="Profile"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          objectFit: "cover",
                                        }}
                                      />
                                    </div>
                                    <div>
                                      {user?.employee?.fullName}
                                      <br />
                                      {user.formattedDates}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="10">No data available</td>
                            </tr>
                          )}
                        </tbody>

                        <tfoot>
                          <tr>
                            <td className="left-aligned" colSpan={8}></td>
                            <td className="left-aligned" colSpan={2}>
                              <strong> Paid Payment: {payBals}</strong>
                            </td>
                          </tr>
                        </tfoot>
                        {/* <tfoot>
                                                    <tr>
                                                        <td className="left-aligned" colSpan={8}>
                                                            <strong>Total Payment: {employee4.totalCost}</strong>
                                                        </td>
                                                        <td className="left-aligned" colSpan={2}>
                                                            <strong> Paid Payment: {employee4.amountPayed}</strong>
                                                           
                                                        </td>
                                                        
                                                    </tr>
                                                </tfoot> */}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* NOC Cheques in Hand */}

              <div
                style={{
                  marginTop: "25px",
                  width: "100%",
                  backgroundColor: "var(--primary-bg-color)",
                  padding: "5px 20px",
                }}
              >
                <h5
                  style={{
                    textAlign: "left",
                    color: "#ffffff",
                    fontSize: "-10rem",
                    margin: "0",
                  }}
                >
                  Payment Schedule
                </h5>
              </div>

              <div
                className="row row-sm mt-0 justify-content-around"
                style={{ width: "400%", marginTop: "0x" }}
              >
                <div className="col-xl-12 col-xl-12 ">
                  <div className="card custom-card">
                    <div className="card-body">
                      <div className="table-responsive">
                        {employee4.paymentPlan === "FPP" && (
                          <>
                            <h4
                              className="mt-0 text-center mb-3"
                              style={{ color: "#2e3192" }}
                            >
                              FLEXI PAYMENT PLAN
                            </h4>
                            <table
                              className="table table-bordered"
                              style={{ width: "100%" }}
                            >
                              <thead>
                                <tr style={{ background: "#d6f6ff26" }}>
                                  <th className="tx-left" />
                                  <th
                                    className="tx-left"
                                    style={{ width: 350 }}
                                  >
                                    Basic Price ₹{" "}
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{
                                        width: 90,
                                        height: 25,
                                        display: "inline",
                                      }}
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.basicPriceFPP
                                          ? `${employee4.plan.basicPriceFPP}`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    />{" "}
                                    per{" "}
                                    {employee4 &&
                                      employee4.plan &&
                                      employee4.plan.areaUnitFPP
                                      ? `${employee4.plan.areaUnitFPP}`
                                      : ""}
                                  </th>
                                  <th className="tx-left" />
                                  <th className="tx-left">
                                    <span
                                      style={{
                                        marginRight: 10,
                                        fontSize: "11px",
                                      }}
                                    >
                                      Installment Amount for {employee4.size}
                                      <span style={{ fontSize: "9px" }}>
                                        {employee4 &&
                                          employee4.plan &&
                                          employee4.plan.areaUnitFPP
                                          ? `${employee4.plan.areaUnitFPP}`
                                          : ""}
                                      </span>
                                    </span>

                                    <button
                                      onClick={handleOpenModal16}
                                      title="View"
                                      style={{
                                        cursor: "pointer",
                                        backgroundColor:
                                          "var(--primary-bg-color)",
                                        color: "#fff",
                                        border: "none",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        fontSize: "12px",
                                        marginLeft: "10px",
                                      }}
                                    >
                                      View Payment Breakup
                                    </button>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left">1</td>
                                  <td className="tx-left">On Booking</td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.onBookingPerFPP
                                          ? `${employee4.plan.onBookingPerFPP}%`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    />
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      value={total1}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>
                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left">2</td>
                                  <td className="tx-left">
                                    Within 24 Months. Monthly installment Each
                                    of:-
                                  </td>
                                  <td className="tx-left" />
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      value={ins}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>
                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left" />
                                  <td className="tx-left">Total value</td>
                                  <td className="tx-left"></td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      value={employee4.totalCost}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </>
                        )}

                        {employee4.paymentPlan === "DLP" && (
                          <>
                            <h4
                              className="mt-0 text-center mb-3"
                              style={{ color: "#2e3192" }}
                            >
                              DOWN PAYMENT PLAN
                            </h4>
                            <table
                              className="table table-bordered"
                              style={{ width: 1280 }}
                            >
                              <thead>
                                <tr style={{ background: "#d6f6ff26" }}>
                                  <th className="tx-left" />

                                  <th
                                    className="tx-left"
                                    style={{ width: 350 }}
                                  >
                                    Basic Price ₹{" "}
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{
                                        width: 90,
                                        height: 25,
                                        display: "inline",
                                      }}
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.basicPriceDLP
                                          ? `${employee4.plan.basicPriceDLP}`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    />{" "}
                                    per{" "}
                                    {employee4 &&
                                      employee4.plan &&
                                      employee4.plan.areaUnitDLP
                                      ? `${employee4.plan.areaUnitDLP}`
                                      : ""}
                                  </th>
                                  <th className="tx-left" />
                                  <th className="tx-left">
                                    <span
                                      style={{
                                        marginRight: 10,
                                        fontSize: "11px",
                                      }}
                                    >
                                      Installment Amount for {employee4.size}{" "}
                                      <span style={{ fontSize: "9px" }}>
                                        {employee4 &&
                                          employee4.plan &&
                                          employee4.plan.areaUnitDLP
                                          ? `${employee4.plan.areaUnitDLP}`
                                          : ""}
                                      </span>
                                    </span>

                                    <button
                                      onClick={handleOpenModal16}
                                      title="View"
                                      style={{
                                        cursor: "pointer",
                                        backgroundColor:
                                          "var(--primary-bg-color)",
                                        color: "#fff",
                                        border: "none",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        fontSize: "12px",
                                        marginLeft: "10px",
                                      }}
                                    >
                                      View Payment Breakup
                                    </button>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left">1</td>
                                  <td className="tx-left">On Booking</td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="onBookingPerDLP"
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.onBookingPerDLP
                                          ? `${employee4.plan.onBookingPerDLP}%`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    />
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="onBookingDLP"
                                      value={total2}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>
                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left">2</td>
                                  <td className="tx-left">
                                    Within{" "}
                                    {employee4 &&
                                      employee4.plan &&
                                      employee4.plan.daysDLP
                                      ? `${employee4.plan.daysDLP}`
                                      : ""}{" "}
                                    Days-
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="withIn30PerDLP"
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.withIn30PerDLP
                                          ? `${employee4.plan.withIn30PerDLP}%`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    />
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="withIn30DLP"
                                      value={total3}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>

                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left">3</td>
                                  <td className="tx-left">Rest on Registry</td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="restOnRegistryPerDLP"
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.restOnRegistryPerDLP
                                          ? `${employee4.plan.restOnRegistryPerDLP}%`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    />
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="restOnRegistryDLP"
                                      value={total3}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>
                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left" />
                                  <td className="tx-left">Total Value</td>
                                  <td className="tx-left"></td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="totalValueDLP"
                                      value={employee4.totalCost}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </>
                        )}

                        {employee4.paymentPlan === "PLP" && (
                          <>
                            <h4
                              className="mt-0 text-center mb-3"
                              style={{ color: "#2e3192" }}
                            >
                              POSSESSION LINK PLAN
                            </h4>
                            <table
                              className="table table-bordered"
                              style={{ width: 1280 }}
                            >
                              <thead>
                                <tr style={{ background: "#d6f6ff26" }}>
                                  <th className="tx-left" />
                                  <th
                                    className="tx-left"
                                    style={{ width: 350 }}
                                  >
                                    Basic Price ₹{" "}
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{
                                        width: 90,
                                        height: 25,
                                        display: "inline",
                                      }}
                                      name="basicPricePLP"
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.basicPricePLP
                                          ? `${employee4.plan.basicPricePLP}`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    />{" "}
                                    per{" "}
                                    {employee4 &&
                                      employee4.plan &&
                                      employee4.plan.areaUnitPLP
                                      ? `${employee4.plan.areaUnitPLP}`
                                      : ""}
                                  </th>
                                  <th className="tx-left" />
                                  <th className="tx-left">
                                    <span
                                      style={{
                                        marginRight: 10,
                                        fontSize: "11px",
                                      }}
                                    >
                                      Installment Amount for {employee4.size}{" "}
                                      <span style={{ fontSize: "9px" }}>
                                        {employee4 &&
                                          employee4.plan &&
                                          employee4.plan.areaUnitPLP
                                          ? `${employee4.plan.areaUnitPLP}`
                                          : ""}
                                      </span>
                                    </span>

                                    <button
                                      onClick={handleOpenModal16}
                                      title="View"
                                      style={{
                                        cursor: "pointer",
                                        backgroundColor:
                                          "var(--primary-bg-color)",
                                        color: "#fff",
                                        border: "none",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        fontSize: "12px",
                                        marginLeft: "10px",
                                      }}
                                    >
                                      View Payment Breakup
                                    </button>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left">1</td>
                                  <td className="tx-left">On Booking</td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="onBookingPerPLP"
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.onBookingPerPLP
                                          ? `${employee4.plan.onBookingPerPLP}%`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    />
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="onBookingPLP"
                                      value={total5}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>
                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left">2</td>
                                  <td className="tx-left">
                                    Within{" "}
                                    {employee4 &&
                                      employee4.plan &&
                                      employee4.plan.days1PLP
                                      ? `${employee4.plan.days1PLP}`
                                      : ""}{" "}
                                    Days-
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="withIn60PerPLP"
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.withIn60PerPLP
                                          ? `${employee4.plan.withIn60PerPLP}%`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    // style={{ color: 'white', backgroundColor: 'gray' }}
                                    />
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="withIn60PLP"
                                      value={total6}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>

                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left">3</td>
                                  <td className="tx-left">
                                    Within{" "}
                                    {employee4 &&
                                      employee4.plan &&
                                      employee4.plan.days2PLP
                                      ? `${employee4.plan.days2PLP}`
                                      : ""}{" "}
                                    Days
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="withIn90PerPLP"
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.withIn90PerPLP
                                          ? `${employee4.plan.withIn90PerPLP}%`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    />
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="withIn90PLP"
                                      value={total7}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>
                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left">4</td>
                                  <td className="tx-left">
                                    Within{" "}
                                    {employee4 &&
                                      employee4.plan &&
                                      employee4.plan.days3PLP
                                      ? `${employee4.plan.days3PLP}`
                                      : ""}{" "}
                                    Days
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="withIn120PerPLP"
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.withIn120PerPLP
                                          ? `${employee4.plan.withIn120PerPLP}%`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    />
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="withIn120PLP"
                                      value={total8}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>

                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left">5</td>
                                  <td className="tx-left">
                                    Within{" "}
                                    {employee4 &&
                                      employee4.plan &&
                                      employee4.plan.days4PLP
                                      ? `${employee4.plan.days4PLP}`
                                      : ""}{" "}
                                    Days
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="withIn150PerPLP"
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.withIn150PerPLP
                                          ? `${employee4.plan.withIn150PerPLP}%`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    />
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="withIn150PLP"
                                      value={total9}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>
                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left">6</td>
                                  <td className="tx-left">
                                    Within{" "}
                                    {employee4 &&
                                      employee4.plan &&
                                      employee4.plan.days5PLP
                                      ? `${employee4.plan.days5PLP}`
                                      : ""}{" "}
                                    Days
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="withIn180PerPLP"
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.withIn180PerPLP
                                          ? `${employee4.plan.withIn180PerPLP}%`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    />
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="withIn120PLP"
                                      value={total10}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>

                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left">7</td>
                                  <td className="tx-left">
                                    Within{" "}
                                    {employee4 &&
                                      employee4.plan &&
                                      employee4.plan.days6PLP
                                      ? `${employee4.plan.days6PLP}`
                                      : ""}{" "}
                                    Days
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="extraPerPLP1"
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.extraPerPLP1
                                          ? `${employee4.plan.extraPerPLP1}%`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    />
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="extraValuePLP1"
                                      value={total11}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>

                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left">8</td>
                                  <td className="tx-left">
                                    Within{" "}
                                    {employee4 &&
                                      employee4.plan &&
                                      employee4.plan.days7PLP
                                      ? `${employee4.plan.days7PLP}`
                                      : ""}{" "}
                                    Days
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="extraPerPLP2"
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.extraPerPLP2
                                          ? `${employee4.plan.extraPerPLP2}%`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    />
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="extraValuePLP2"
                                      value={total12}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>

                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left">9</td>
                                  <td className="tx-left">
                                    Within{" "}
                                    {employee4 &&
                                      employee4.plan &&
                                      employee4.plan.days8PLP
                                      ? `${employee4.plan.days8PLP}`
                                      : ""}{" "}
                                    Days
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="extraPerPLP3"
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.extraPerPLP3
                                          ? `${employee4.plan.extraPerPLP3}%`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    />
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="extraValuePLP3"
                                      value={total13}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>

                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left">10</td>
                                  <td className="tx-left">Rest on Registry</td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="restOnRegistryPerPLP"
                                      value={
                                        employee4 &&
                                          employee4.plan &&
                                          employee4.plan.restOnRegistryPerPLP
                                          ? `${employee4.plan.restOnRegistryPerPLP}%`
                                          : ""
                                      }
                                      disabled={disableInput2}
                                    />
                                  </td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="restOnRegistryPLP"
                                      value={total14}
                                      disabled={disableInput2}
                                    />
                                  </td>
                                </tr>
                                <tr style={{ background: "#d6f6ff26" }}>
                                  <td className="tx-left" />

                                  <td className="tx-left">Total Value</td>
                                  <td className="tx-left"></td>
                                  <td className="tx-left">
                                    <input
                                      type="text"
                                      className="form-control"
                                      style={{ height: 25 }}
                                      name="totalValuePLP"
                                      value={employee4.totalCost}
                                      disabled={disableInput2}
                                    />
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

              {employee4.paymentPlan === "FPP" && (
                <div
                  className="row row-xl mt-4 justify-content-around"
                  style={{ width: "400%" }}
                >
                  <div
                    className="col-xl-12 col-lg-12 col-md-12"
                    style={{ marginTop: "-22px" }}
                  >
                    <div className="card custom-card main-content-body-profile">
                      <div
                        className="card-body"
                        style={{
                          overflowX: "auto",
                          maxWidth: "100%",
                          display: "block",
                        }}
                      >
                        <div
                          className="table-responsive"
                          style={{ width: "100%" }}
                        >
                          {employee4.paymentPlan === "FPP" && (
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
                                    <th className="tx-left">P.NO</th>
                                    <th className="tx-left">Total Balance</th>
                                    <th className="tx-left"> Due Payment</th>
                                    <th className="tx-left">(%)</th>
                                    <th className="tx-left"> Due Date</th>
                                    <th className="tx-left"> Actual Due</th>
                                    <th className="tx-left">Received</th>
                                    <th className="tx-left"> Due Amount</th>
                                    <th className="tx-left">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {users4.length > 0 ? (
                                    users4.map((user) => (
                                      <tr style={{ background: "#d6f6ff26" }}>
                                        <td className="tx-left">{user.id}</td>

                                        <td className="tx-left">
                                          {user.totalBalance}
                                        </td>
                                        <td className="tx-left">
                                          {user.duePayment}{" "}
                                          <span
                                            style={{
                                              display: "inline-block",
                                              textAlign: "right",
                                              color: "#4CAF50",
                                              fontWeight: "bold",
                                              marginRight: "40px",
                                            }}
                                          >
                                            {user.paymentInfo}
                                          </span>
                                        </td>
                                        <td className="tx-left">
                                          {user.percentage}
                                        </td>
                                        <td className="tx-left">
                                          {user.dueDate}
                                        </td>
                                        <td className="tx-left">
                                          {user.actualDue}
                                        </td>
                                        <td className="tx-left">
                                          {user.received}
                                        </td>
                                        <td className="tx-left">
                                          {user.dueAmount && (
                                            <>
                                              <span
                                                style={{ color: user.colour }}
                                              >
                                                {user.dueAmount}
                                              </span>
                                              {user.showButton === true && (
                                                <Link
                                                  to={`/demand-letter/${empid}`}
                                                >
                                                  <div
                                                    style={{
                                                      width: "30px",
                                                      height: "30px",
                                                      borderRadius: "50%",
                                                      backgroundColor:
                                                        "#007bff",
                                                      display: "inline-flex",
                                                      alignItems: "center",
                                                      justifyContent: "center",
                                                      cursor: "pointer",
                                                      marginLeft: "25px",
                                                      transition:
                                                        "all 0.3s ease-in-out",
                                                    }}
                                                    onMouseOver={(e) => {
                                                      e.currentTarget.style.transform =
                                                        "scale(1.1)";
                                                      e.currentTarget.style.backgroundColor =
                                                        "green";
                                                    }}
                                                    onMouseOut={(e) => {
                                                      e.currentTarget.style.transform =
                                                        "scale(1)";
                                                      e.currentTarget.style.backgroundColor =
                                                        "#007bff";
                                                    }}
                                                  >
                                                    <i
                                                      className="fe fe-plus"
                                                      style={{
                                                        color: "white",
                                                        fontSize: "18px",
                                                      }}
                                                    />
                                                  </div>
                                                </Link>
                                              )}
                                              {user.showEye === true && (
                                                <a
                                                  onClick={() =>
                                                    handleOpenModal56(user.id)
                                                  }
                                                  style={{
                                                    marginLeft: "15px",
                                                    cursor: "pointer",
                                                    title: "View",
                                                    marginTop: "5px",
                                                  }}
                                                >
                                                  <i className="fa fa-eye me-3" />
                                                </a>
                                              )}
                                            </>
                                          )}
                                        </td>

                                        <td className="tx-left">
                                          {user.status}
                                        </td>
                                      </tr>
                                    ))
                                  ) : (
                                    <tr className="no-data">
                                      <td className="fixed-width" colSpan="10">
                                        No data available
                                      </td>
                                    </tr>
                                  )}

                                  {/* <tr style={{ background: "#d6f6ff26" }}>
                                                                        <td className="tx-left" colSpan="5">Total value</td>
                                                                        <td className="tx-left"> 10,00000</td>
                                                                    </tr> */}
                                </tbody>
                              </table>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {employee4.paymentPlan === "PLP" && (
                <div
                  className="row row-xl mt-4 justify-content-around"
                  style={{ width: "400%" }}
                >
                  <div
                    className="col-xl-12 col-lg-12 col-md-12"
                    style={{ marginTop: "-22px" }}
                  >
                    <div className="card custom-card main-content-body-profile">
                      <div
                        className="card-body"
                        style={{
                          overflowX: "auto",
                          maxWidth: "100%",
                          display: "block",
                        }}
                      >
                        <div
                          className="table-responsive"
                          style={{ width: "100%" }}
                        >
                          {employee4.paymentPlan === "PLP" && (
                            <>
                              <h4
                                className="mt-0 text-center mb-3"
                                style={{ color: "#2e3192" }}
                              >
                                POSSESSION LINK PLAN
                              </h4>
                              <table className="table table-bordered">
                                <thead>
                                  <tr style={{ background: "#d6f6ff26" }}>
                                    <th className="tx-left">P.NO</th>
                                    <th className="tx-left">Total Balance</th>
                                    <th className="tx-left"> Due Payment</th>
                                    <th className="tx-left">(%)</th>
                                    <th className="tx-left"> Due Date</th>
                                    <th className="tx-left"> Actual Due</th>
                                    <th className="tx-left">Recived</th>
                                    <th className="tx-left"> Due Amount</th>
                                    <th className="tx-left">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {users4.length > 0 ? (
                                    users4.map((user) => (
                                      <tr style={{ background: "#d6f6ff26" }}>
                                        <td className="tx-left">{user.id}</td>

                                        <td className="tx-left">
                                          {user.totalBalance}
                                        </td>
                                        <td className="tx-left">
                                          {user.duePayment}{" "}
                                          <span
                                            style={{
                                              display: "inline-block",
                                              textAlign: "right",
                                              color: "#4CAF50",
                                              fontWeight: "bold",
                                              marginRight: "40px",
                                            }}
                                          >
                                            {user.paymentInfo}
                                          </span>
                                        </td>
                                        <td className="tx-left">
                                          {user.percentage}
                                        </td>
                                        <td className="tx-left">
                                          {user.dueDate}
                                        </td>
                                        <td className="tx-left">
                                          {user.actualDue}
                                        </td>
                                        <td className="tx-left">
                                          {user.received}
                                        </td>
                                        <td className="tx-left">
                                          {user.dueAmount && (
                                            <>
                                              <span
                                                style={{ color: user.colour }}
                                              >
                                                {user.dueAmount}
                                              </span>
                                              {user.showButton === true && (
                                                <Link
                                                  to={`/demand-letter/${empid}`}
                                                >
                                                  <div
                                                    style={{
                                                      width: "30px",
                                                      height: "30px",
                                                      borderRadius: "50%",
                                                      backgroundColor:
                                                        "#007bff",
                                                      display: "inline-flex",
                                                      alignItems: "center",
                                                      justifyContent: "center",
                                                      cursor: "pointer",
                                                      marginLeft: "25px",
                                                      transition:
                                                        "all 0.3s ease-in-out",
                                                    }}
                                                    onMouseOver={(e) => {
                                                      e.currentTarget.style.transform =
                                                        "scale(1.1)";
                                                      e.currentTarget.style.backgroundColor =
                                                        "green";
                                                    }}
                                                    onMouseOut={(e) => {
                                                      e.currentTarget.style.transform =
                                                        "scale(1)";
                                                      e.currentTarget.style.backgroundColor =
                                                        "#007bff";
                                                    }}
                                                  >
                                                    <i
                                                      className="fe fe-plus"
                                                      style={{
                                                        color: "white",
                                                        fontSize: "18px",
                                                      }}
                                                    />
                                                  </div>
                                                </Link>
                                              )}
                                              {user.showEye === true && (
                                                <a
                                                  onClick={() =>
                                                    handleOpenModal56(user.id)
                                                  }
                                                  style={{
                                                    marginLeft: "15px",
                                                    cursor: "pointer",
                                                    title: "View",
                                                    marginTop: "5px",
                                                  }}
                                                >
                                                  <i className="fa fa-eye me-3" />
                                                </a>
                                              )}
                                            </>
                                          )}
                                        </td>

                                        <td className="tx-left">
                                          {user.status}
                                        </td>
                                      </tr>
                                    ))
                                  ) : (
                                    <tr className="no-data">
                                      <td className="fixed-width" colSpan="10">
                                        No data available
                                      </td>
                                    </tr>
                                  )}

                                  {/* <tr style={{ background: "#d6f6ff26" }}>
                                                                        <td className="tx-left" colSpan="5">Total value</td>
                                                                        <td className="tx-left"> 10,00000</td>
                                                                    </tr> */}
                                </tbody>
                              </table>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {employee4.paymentPlan === "DLP" && (
                <div
                  className="row row-xl mt-4 justify-content-around"
                  style={{ width: "400%" }}
                >
                  <div
                    className="col-xl-12 col-lg-12 col-md-12"
                    style={{ marginTop: "-22px" }}
                  >
                    <div className="card custom-card main-content-body-profile">
                      <div
                        className="card-body"
                        style={{
                          overflowX: "auto",
                          maxWidth: "100%",
                          display: "block",
                        }}
                      >
                        <div
                          className="table-responsive"
                          style={{ width: "100%" }}
                        >
                          {employee4.paymentPlan === "DLP" && (
                            <>
                              <h4
                                className="mt-0 text-center mb-3"
                                style={{ color: "#2e3192" }}
                              >
                                DOWN PAYMENT PLAN
                              </h4>
                              <table className="table table-bordered">
                                <thead>
                                  <tr style={{ background: "#d6f6ff26" }}>
                                    <th className="tx-left">P.NO</th>
                                    <th className="tx-left">Total Balance</th>
                                    <th className="tx-left"> Due Payment</th>
                                    <th className="tx-left">(%)</th>
                                    <th className="tx-left"> Due Date</th>
                                    <th className="tx-left"> Actual Due</th>
                                    <th className="tx-left">Recived</th>
                                    <th className="tx-left"> Due Amount</th>
                                    <th className="tx-left">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {users4.length > 0 ? (
                                    users4.map((user) => (
                                      <tr style={{ background: "#d6f6ff26" }}>
                                        <td className="tx-left">{user.id}</td>

                                        <td className="tx-left">
                                          {user.totalBalance}
                                        </td>
                                        <td className="tx-left">
                                          {user.duePayment}{" "}
                                          <span
                                            style={{
                                              display: "inline-block",
                                              textAlign: "right",
                                              color: "#4CAF50",
                                              fontWeight: "bold",
                                              marginRight: "40px",
                                            }}
                                          >
                                            {user.paymentInfo}
                                          </span>
                                        </td>
                                        <td className="tx-left">
                                          {user.percentage}
                                        </td>
                                        <td className="tx-left">
                                          {user.dueDate}
                                        </td>
                                        <td className="tx-left">
                                          {user.actualDue}
                                        </td>
                                        <td className="tx-left">
                                          {user.received}
                                        </td>
                                        <td className="tx-left">
                                          {user.dueAmount && (
                                            <>
                                              <span
                                                style={{ color: user.colour }}
                                              >
                                                {user.dueAmount}
                                              </span>
                                              {user.showButton === true && (
                                                <Link
                                                  to={`/demand-letter/${empid}`}
                                                >
                                                  <div
                                                    style={{
                                                      width: "30px",
                                                      height: "30px",
                                                      borderRadius: "50%",
                                                      backgroundColor:
                                                        "#007bff",
                                                      display: "inline-flex",
                                                      alignItems: "center",
                                                      justifyContent: "center",
                                                      cursor: "pointer",
                                                      marginLeft: "25px",
                                                      transition:
                                                        "all 0.3s ease-in-out",
                                                    }}
                                                    onMouseOver={(e) => {
                                                      e.currentTarget.style.transform =
                                                        "scale(1.1)";
                                                      e.currentTarget.style.backgroundColor =
                                                        "green";
                                                    }}
                                                    onMouseOut={(e) => {
                                                      e.currentTarget.style.transform =
                                                        "scale(1)";
                                                      e.currentTarget.style.backgroundColor =
                                                        "#007bff";
                                                    }}
                                                  >
                                                    <i
                                                      className="fe fe-plus"
                                                      style={{
                                                        color: "white",
                                                        fontSize: "18px",
                                                      }}
                                                    />
                                                  </div>
                                                </Link>
                                              )}
                                              {user.showEye === true && (
                                                <a
                                                  onClick={() =>
                                                    handleOpenModal56(user.id)
                                                  }
                                                  style={{
                                                    marginLeft: "15px",
                                                    cursor: "pointer",
                                                    title: "View",
                                                    marginTop: "5px",
                                                  }}
                                                >
                                                  <i className="fa fa-eye me-3" />
                                                </a>
                                              )}
                                            </>
                                          )}
                                        </td>

                                        <td className="tx-left">
                                          {user.status}
                                        </td>
                                      </tr>
                                    ))
                                  ) : (
                                    <tr className="no-data">
                                      <td className="fixed-width" colSpan="10">
                                        No data available
                                      </td>
                                    </tr>
                                  )}
                                </tbody>
                              </table>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className={`modal fade ${isModalOpen16 ? "show d-block" : ""}`}
          id="modaldemo-callback-form"
          tabIndex="-1"
          style={{
            display: isModalOpen16 ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: isModalOpen16 ? "hidden" : "auto",
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            style={{ maxWidth: "30%", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <h5 className="modal-title">View Payment</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal16}
                  aria-label="Close"
                  style={{ outline: "none", cursor: "pointer" }}
                ></button>
              </div>

              <div className="modal-body" style={{ padding: "20px" }}>
                <form>
                  <div className="row row-sm">
                    <div className="col-sm-12 form-group">
                      <div style={{ marginBottom: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label
                            className="form-label"
                            htmlFor="kyc1"
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                          >
                            Project: {employee4.projectId}
                          </label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label
                            className="form-label"
                            htmlFor="kyc2"
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                          >
                            Unit no: {employee4.unitNo}
                          </label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label
                            className="form-label"
                            htmlFor="kyc2"
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                          >
                            {employee4?.inventory?.type === "Plot" && (
                              <>Size: {employee4?.inventory?.size} SQ YD</>
                            )}
                            {employee4?.inventory?.type === "Farmhouse" && (
                              <>Size: {employee4?.inventory?.size} SQ YD</>
                            )}
                            {employee4?.inventory?.type === "Shop" && (
                              <>Size: {employee4?.inventory?.size} SQ FT</>
                            )}
                          </label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label
                            className="form-label"
                            htmlFor="kyc2"
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                          >
                            BSP: Rs. {employee4.bsp}
                          </label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label
                            className="form-label"
                            htmlFor="kyc2"
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                          >
                            UNIT Price: Rs. {employee4.unitPrice}
                          </label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label
                            className="form-label"
                            htmlFor="kyc2"
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                          >
                            Fixed Charges(EDS/IDS): Rs. {employee4.fixedCharges}
                          </label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label
                            className="form-label"
                            htmlFor="kyc2"
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                          >
                            EDS/IDS Amount: Rs. {employee4.fixedAmount}
                          </label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label
                            className="form-label"
                            htmlFor="kyc2"
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                          >
                            PLCs: {employee4.PLCs}
                          </label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label
                            className="form-label"
                            htmlFor="kyc2"
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                          >
                            PLCs Value: Rs. {employee4.plcAmount}
                          </label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label
                            className="form-label"
                            htmlFor="kyc2"
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                          >
                            Total cost: Rs. {employee4.totalCost}
                          </label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label
                            className="form-label"
                            htmlFor="kyc2"
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                          >
                            Payment Plan: {employee4.paymentPlan}
                          </label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label
                            className="form-label"
                            htmlFor="kyc2"
                            style={{ marginLeft: "8px", cursor: "pointer" }}
                          >
                            Gift: {employee4.gift}
                          </label>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <label
                            className="form-label"
                            htmlFor="kyc2"
                            style={{
                              marginLeft: "8px",
                              cursor: "pointer",
                              color: "red",
                            }}
                          >
                            Registration Amount: {employee4.registrationAmount}
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
          className={`modal fade ${isModalOpen3 ? "show d-block" : ""}`}
          id="modaldemo-callback-form"
          tabIndex="-1"
          style={{
            display: isModalOpen3 ? "flex" : "none",
            top: "20px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            style={{ maxWidth: "40%", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <h5 className="modal-title">Add Payment</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal3}
                  aria-label="Close"
                  style={{ outline: "none", cursor: "pointer" }}
                ></button>
              </div>

              <div className="modal-body" style={{ padding: "20px" }}>
                <form>
                  <div className="row row-sm">
                    <div className="col-sm-6 form-group">
                      <label className="form-label">
                        Amount: <span className="tx-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="amount"
                        value={formData.amount}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d{0,50}$/.test(value)) {
                            handleInputChange(e);
                          }
                        }}
                      // onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label">
                        {" "}
                        Collection Mode: <span className="tx-danger">*</span>
                      </label>
                      <select
                        className="form-control select2"
                        name="collectionMode"
                        value={formData.collectionMode}
                        onChange={handleInputChange}
                      >
                        <option value="">Select </option>
                        <option value={"Discount"}>Discount</option>
                        <option value={"Online"}>Online</option>
                        <option value={"Cheque"}>Cheque</option>
                        <option value={"CDIB"}>CDIB</option>
                      </select>
                    </div>

                    {formData.collectionMode === "Discount" && (
                      <>
                        <div className="col-sm-6 form-group mt-3">
                          {/* <label className="form-label">Send Otp</label> */}
                          <button
                            className="btn ripple btn-success  btn-lg"
                            type="button"
                            style={{ marginLeft: "90px", fontSize: "16px" }}
                            onClick={handleSendOtp}
                            disabled={isDisabled || isLoadingOtp}
                          >
                            {isDisabled ? "Wait 1 min..." : "Send OTP"}
                          </button>
                          {isDisabled && (
                            <p className="mt-2 text-success fw-bold text-center">
                              OTP has been sent to **Kushal Chopra** at <br />
                              📞 **9711600802** and 📧
                              **info@amrealtysolutions.in**.
                            </p>
                          )}
                        </div>

                        <div className="col-sm-6 form-group">
                          <label className="form-label">OTP</label>
                          <input
                            type="text"
                            className="form-control"
                            name="otp"
                            value={formData.otp}
                            onChange={handleInputChange}
                          />
                        </div>
                      </>
                    )}

                    {formData.collectionMode === "CDIB" && (
                      <>
                        <div className="col-sm-6 form-group">
                          <label className="form-label">Bank Name</label>
                          <select
                            className="form-control select2"
                            name="amrsAccount"
                            value={formData.amrsAccount}
                            onChange={handleInputChange}
                          >
                            <option value="">Select </option>
                            {bank.map((option, index) => (
                              <option key={option.id} value={option.id}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="col-sm-6 form-group">
                          <label className="form-label">Remark</label>
                          <input
                            type="text"
                            className="form-control"
                            name="remark"
                            value={formData.remark}
                            onChange={handleInputChange}
                          />
                        </div>
                      </>
                    )}

                    {formData.collectionMode === "Cheque" && (
                      <>
                        <div
                          className="col-sm-6 form-group"
                          style={{ marginTop: "10px" }}
                        >
                          <label className="form-label">Cheque Date</label>
                          <input
                            type="date"
                            className="form-control"
                            name="chequeDate"
                            value={formData.chequeDate}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div
                          className="col-sm-6 form-group"
                          style={{ marginTop: "10px" }}
                        >
                          <label className="form-label">Cheque No</label>
                          <input
                            type="text"
                            className="form-control"
                            name="chequeNo"
                            value={formData.chequeNo}
                            onChange={(e) => {
                              const value = e.target.value;
                              if (/^\d{0,6}$/.test(value)) {
                                handleInputChange(e);
                              }
                            }}
                          // onChange={handleInputChange}
                          />
                        </div>
                        <div
                          className="col-sm-6 form-group"
                          style={{ marginTop: "10px" }}
                        >
                          <label className="form-label">Deposit to Webkype</label>
                          <select
                            className="form-control select2"
                            name="amrsAccount"
                            value={formData.amrsAccount}
                            onChange={handleInputChange}
                          >
                            <option value="">Select </option>
                            {project.map((option, index) => (
                              <option key={option.id} value={option.id}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div
                          className="col-sm-6 form-group"
                          style={{ marginTop: "10px" }}
                        >
                          <label className="form-label">Bank Cheque</label>
                          {/* <input type="text" className="form-control"
                                                        name="deposteToAmrs"
                                                        value={formData.deposteToAmrs}
                                                        onChange={handleInputChange} /> */}
                          <select
                            className="form-control select2"
                            name="deposteToAmrs"
                            value={formData.deposteToAmrs}
                            onChange={handleInputChange}
                          >
                            <option value="">Select </option>
                            {bankList.map((option, index) => (
                              <option key={option.id} value={option.name}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </>
                    )}

                    {formData.collectionMode === "Online" && (
                      <>
                        <div
                          className="col-sm-6 form-group"
                          style={{ marginTop: "10px" }}
                        >
                          <label className="form-label">Webkype Account</label>
                          <select
                            className="form-control select2"
                            name="amrsAccount"
                            value={formData.amrsAccount}
                            onChange={handleInputChange}
                          >
                            <option value="">Select </option>
                            {project.map((option, index) => (
                              <option key={option.id} value={option.id}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-sm-6 form-group">
                          <label className="form-label">Transaction No</label>
                          <input
                            type="text"
                            className="form-control"
                            name="transactionNo"
                            value={formData.transactionNo}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-sm-6 form-group">
                          <label className="form-label">Payment Method</label>
                          <select
                            className="form-control select2"
                            name="remark"
                            value={formData.remark}
                            onChange={handleInputChange}
                          >
                            <option value="">Select</option>
                            <option>NEFT/IMPS/RTGS</option>
                            <option>UPI</option>
                            <option>POS</option>
                            <option>Link Payment</option>
                          </select>
                        </div>
                      </>
                    )}

                    <div className="col-sm-6 form-group">
                      <label className="form-label">Payment Credit Date </label>
                      <input
                        type="date"
                        className="form-control"
                        name="paymentCredit"
                        value={formData.paymentCredit}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label"> Upload Receipt</label>
                      <input
                        type="file"
                        className="form-control"
                        name="uploadRecipt"
                        accept="/pdf"
                        onChange={handleFileChange15}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="modal-footer"
                style={{
                  borderTop: "1px solid #dee2e6",
                  borderRadius: "0 0 10px 10px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <button
                  className="btn ripple btn-primary"
                  type="button"
                  style={{
                    borderRadius: "5px",
                    padding: "8px 20px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: loadings ? "not-allowed" : "pointer",
                    opacity: loadings ? 0.7 : 1,
                  }}
                  onClick={checkChequeDuplicacy}
                  disabled={loadings}
                >
                  {loadings ? "Loading..." : "Submit"}
                </button>
                {isChequeDuplicate && (
                  <div
                    className="modal fade show d-block"
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">
                            Check Cheque Duplicacy
                          </h5>
                        </div>
                        <div className="modal-body text-center">
                          This cheque number already exists. Do you want to
                          continue?
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                          <button
                            className="btn btn-secondary"
                            onClick={() => setIsChequeDuplicate(false)}
                          >
                            Close
                          </button>
                          <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Add Noc payment */}
        <div
          className={`modal fade ${isModalOpenNocPayment ? "show d-block" : ""
            }`}
          id="modaldemo-callback-form"
          tabIndex="-1"
          style={{
            display: isModalOpenNocPayment ? "flex" : "none",
            top: "20px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            style={{ maxWidth: "40%", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <h5 className="modal-title">Add Payment NOC</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModalNocPayment}
                  aria-label="Close"
                  style={{ outline: "none", cursor: "pointer" }}
                ></button>
              </div>

              <div className="modal-body" style={{ padding: "20px" }}>
                <form>
                  <div className="row row-sm">
                    <div className="col-sm-6">
                      <label className="form-label">
                        {" "}
                        Payment For: <span className="tx-danger">*</span>
                      </label>
                      <select
                        className="form-control select2"
                        name="paymentFor"
                        value={formDataNoc.paymentFor}
                        onChange={handleInputChangeNoc}
                      >
                        <option value="">Select </option>
                        {nocPaymentFor.map((item) => (
                          <option key={item.name} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-sm-6 form-group">
                      <label className="form-label">
                        Amount: <span className="tx-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="amount"
                        value={formDataNoc.amount}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d{0,50}$/.test(value)) {
                            handleInputChangeNoc(e);
                          }
                        }}
                      // onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label">
                        {" "}
                        Collection Mode: <span className="tx-danger">*</span>
                      </label>
                      <select
                        className="form-control select2"
                        name="collectionMode"
                        value={formDataNoc.collectionMode}
                        onChange={handleInputChangeNoc}
                      >
                        <option value="">Select </option>
                        <option value={"Discount"}>Discount</option>
                        <option value={"Online"}>Online</option>
                        <option value={"Cheque"}>Cheque</option>
                        <option value={"CDIB"}>CDIB</option>
                      </select>
                    </div>

                    {formDataNoc.collectionMode === "Discount" && (
                      <>
                        <div className="col-sm-6 form-group mt-3">
                          {/* <label className="form-label">Send Otp</label> */}
                          <button
                            className="btn ripple btn-success  btn-lg"
                            type="button"
                            style={{ marginLeft: "90px", fontSize: "16px" }}
                            onClick={handleSendOtp}
                            disabled={isDisabled || isLoadingOtp}
                          >
                            {isDisabled ? "Wait 1 min..." : "Send OTP"}
                          </button>
                          {isDisabled && (
                            <p className="mt-2 text-success fw-bold text-center">
                              OTP has been sent to **Kushal Chopra** at <br />
                              📞 **9711600802** and 📧
                              **info@amrealtysolutions.in**.
                            </p>
                          )}
                        </div>

                        <div className="col-sm-6 form-group">
                          <label className="form-label">OTP</label>
                          <input
                            type="text"
                            className="form-control"
                            name="otp"
                            value={formDataNoc.otp}
                            onChange={handleInputChangeNoc}
                          />
                        </div>
                      </>
                    )}

                    {formDataNoc.collectionMode === "CDIB" && (
                      <>
                        <div className="col-sm-6 form-group">
                          <label className="form-label">Bank Name</label>
                          <select
                            className="form-control select2"
                            name="amrsAccount"
                            value={formDataNoc.amrsAccount}
                            onChange={handleInputChangeNoc}
                          >
                            <option value="">Select </option>
                            {bank.map((option, index) => (
                              <option key={option.id} value={option.id}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="col-sm-6 form-group">
                          <label className="form-label">Remark</label>
                          <input
                            type="text"
                            className="form-control"
                            name="remark"
                            value={formDataNoc.remark}
                            onChange={handleInputChangeNoc}
                          />
                        </div>
                      </>
                    )}

                    {formDataNoc.collectionMode === "Cheque" && (
                      <>
                        <div
                          className="col-sm-6 form-group"
                          style={{ marginTop: "10px" }}
                        >
                          <label className="form-label">Cheque Date</label>
                          <input
                            type="date"
                            className="form-control"
                            name="chequeDate"
                            value={formDataNoc.chequeDate}
                            onChange={handleInputChangeNoc}
                          />
                        </div>
                        <div
                          className="col-sm-6 form-group"
                          style={{ marginTop: "10px" }}
                        >
                          <label className="form-label">Cheque No</label>
                          <input
                            type="text"
                            className="form-control"
                            name="chequeNo"
                            value={formDataNoc.chequeNo}
                            onChange={(e) => {
                              const value = e.target.value;
                              if (/^\d{0,6}$/.test(value)) {
                                handleInputChangeNoc(e);
                              }
                            }}
                          // onChange={handleInputChange}
                          />
                        </div>
                        <div
                          className="col-sm-6 form-group"
                          style={{ marginTop: "10px" }}
                        >
                          <label className="form-label">Deposit to Webkype</label>
                          <select
                            className="form-control select2"
                            name="amrsAccount"
                            value={formDataNoc.amrsAccount}
                            onChange={handleInputChangeNoc}
                          >
                            <option value="">Select </option>
                            {project.map((option, index) => (
                              <option key={option.id} value={option.id}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div
                          className="col-sm-6 form-group"
                          style={{ marginTop: "10px" }}
                        >
                          <label className="form-label">Bank Cheque</label>
                          {/* <input type="text" className="form-control"
                                                        name="deposteToAmrs"
                                                        value={formData.deposteToAmrs}
                                                        onChange={handleInputChange} /> */}
                          <select
                            className="form-control select2"
                            name="deposteToAmrs"
                            value={formDataNoc.deposteToAmrs}
                            onChange={handleInputChangeNoc}
                          >
                            <option value="">Select </option>
                            {bankList.map((option, index) => (
                              <option key={option.id} value={option.name}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </>
                    )}

                    {formDataNoc.collectionMode === "Online" && (
                      <>
                        <div
                          className="col-sm-6 form-group"
                          style={{ marginTop: "10px" }}
                        >
                          <label className="form-label">Webkype Account</label>
                          <select
                            className="form-control select2"
                            name="amrsAccount"
                            value={formDataNoc.amrsAccount}
                            onChange={handleInputChangeNoc}
                          >
                            <option value="">Select </option>
                            {project.map((option, index) => (
                              <option key={option.id} value={option.id}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-sm-6 form-group">
                          <label className="form-label">Transaction No</label>
                          <input
                            type="text"
                            className="form-control"
                            name="transactionNo"
                            value={formDataNoc.transactionNo}
                            onChange={handleInputChangeNoc}
                          />
                        </div>
                        <div className="col-sm-6 form-group">
                          <label className="form-label">Payment Method</label>
                          <select
                            className="form-control select2"
                            name="remark"
                            value={formDataNoc.remark}
                            onChange={handleInputChangeNoc}
                          >
                            <option value="">Select</option>
                            <option>NEFT/IMPS/RTGS</option>
                            <option>UPI</option>
                            <option>POS</option>
                            <option>Link Payment</option>
                          </select>
                        </div>
                      </>
                    )}

                    <div className="col-sm-6 form-group">
                      <label className="form-label">Payment Credit Date </label>
                      <input
                        type="date"
                        className="form-control"
                        name="paymentCredit"
                        value={formDataNoc.paymentCredit}
                        onChange={handleInputChangeNoc}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label"> Upload Receipt</label>
                      <input
                        type="file"
                        className="form-control"
                        name="uploadRecipt"
                        accept="/pdf"
                        onChange={handleFileChangeNoc}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="modal-footer"
                style={{
                  borderTop: "1px solid #dee2e6",
                  borderRadius: "0 0 10px 10px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <button
                  className="btn ripple btn-primary"
                  type="button"
                  style={{
                    borderRadius: "5px",
                    padding: "8px 20px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: loadings ? "not-allowed" : "pointer",
                    opacity: loadings ? 0.7 : 1,
                  }}
                  onClick={checkChequeDuplicacyNoc}
                  disabled={loadings}
                >
                  {loadings ? "Loading..." : "Submit"}
                </button>
                {isChequeDuplicate && (
                  <div
                    className="modal fade show d-block"
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">
                            Check Cheque Duplicacy
                          </h5>
                        </div>
                        <div className="modal-body text-center">
                          This cheque number already exists. Do you want to
                          continue?
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                          <button
                            className="btn btn-secondary"
                            onClick={() => setIsChequeDuplicate(false)}
                          >
                            Close
                          </button>
                          <button
                            className="btn btn-primary"
                            onClick={handleSubmitNoc}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`modal fade ${isModalOpen10 ? "show d-block" : ""}`}
          id="modaldemo-callback-form"
          tabIndex="-1"
          style={{
            display: isModalOpen10 ? "flex" : "none",
            top: "20px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            style={{ maxWidth: "40%", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <h5 className="modal-title">Update Payment({idsss})</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal10}
                  aria-label="Close"
                  style={{ outline: "none", cursor: "pointer" }}
                ></button>
              </div>

              <div className="modal-body" style={{ padding: "20px" }}>
                <form>
                  <div className="row row-sm">
                    <div className="col-sm-6 form-group">
                      <label className="form-label">
                        Amount: <span className="tx-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="amount"
                        value={formData10.amount}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d{0,50}$/.test(value)) {
                            handleInputChange10(e);
                          }
                        }}
                      // onChange={handleInputChange10}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label">
                        {" "}
                        Collection Mode: <span className="tx-danger">*</span>
                      </label>
                      <select
                        className="form-control select2"
                        name="collectionMode"
                        value={formData10.collectionMode}
                        onChange={handleInputChange10}
                      >
                        <option value="">Select </option>
                        <option value={"Discount"}>Discount</option>
                        <option value={"Online"}>Online</option>
                        <option value={"Cheque"}>Cheque</option>
                        <option value={"CDIB"}>CDIB</option>
                      </select>
                    </div>

                    {formData10.collectionMode === "Discount" && (
                      <>
                        <div className="col-sm-6 form-group mt-3">
                          {/* <label className="form-label">Send Otp</label> */}
                          <button
                            className="btn ripple btn-success  btn-lg"
                            type="button"
                            style={{ marginLeft: "90px", fontSize: "16px" }}
                            onClick={handleSendEditOtp}
                            disabled={isDisabled || isLoadingOtp}
                          >
                            {isDisabled ? "Wait 1 min..." : "Send OTP"}
                          </button>
                          {isDisabled && (
                            <p className="mt-2 text-success fw-bold text-center">
                              OTP has been sent to **Kushal Chopra** at <br />
                              📞 **9711600802** and 📧
                              **info@amrealtysolutions.in**.
                            </p>
                          )}
                        </div>

                        <div className="col-sm-6 form-group">
                          <label className="form-label">OTP</label>
                          <input
                            type="text"
                            className="form-control"
                            name="otp"
                            value={formData10.otp}
                            onChange={handleInputChange10}
                          />
                        </div>
                      </>
                    )}

                    {formData10.collectionMode === "CDIB" && (
                      <>
                        <div className="col-sm-6 form-group">
                          <label className="form-label">Bank Name</label>
                          <select
                            className="form-control select2"
                            name="amrsAccount"
                            value={formData10.amrsAccount}
                            onChange={handleInputChange10}
                          >
                            <option value="">Select </option>
                            {bank.map((option, index) => (
                              <option key={option.id} value={option.id}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="col-sm-6 form-group">
                          <label className="form-label">Remark</label>
                          <input
                            type="text"
                            className="form-control"
                            name="remark"
                            value={formData10.remark}
                            onChange={handleInputChange10}
                          />
                        </div>
                      </>
                    )}
                    {formData10.collectionMode === "Cheque" && (
                      <>
                        <div
                          className="col-sm-6 form-group"
                          style={{ marginTop: "10px" }}
                        >
                          <label className="form-label">Cheque Date</label>
                          <input
                            type="date"
                            className="form-control"
                            name="chequeDate"
                            value={formData10.chequeDate}
                            onChange={handleInputChange10}
                          />
                        </div>
                        <div
                          className="col-sm-6 form-group"
                          style={{ marginTop: "10px" }}
                        >
                          <label className="form-label">Cheque No</label>
                          <input
                            type="text"
                            className="form-control"
                            name="chequeNo"
                            value={formData10.chequeNo}
                            onChange={(e) => {
                              const value = e.target.value;
                              if (/^\d{0,6}$/.test(value)) {
                                handleInputChange10(e);
                              }
                            }}
                          // onChange={handleInputChange10}
                          />
                        </div>
                        <div
                          className="col-sm-6 form-group"
                          style={{ marginTop: "10px" }}
                        >
                          <label className="form-label">Deposit to Webkype</label>
                          <select
                            className="form-control select2"
                            name="amrsAccount"
                            value={formData10.amrsAccount}
                            onChange={handleInputChange10}
                          >
                            <option value="">Select </option>
                            {project.map((option, index) => (
                              <option key={option.id} value={option.id}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div
                          className="col-sm-6 form-group"
                          style={{ marginTop: "10px" }}
                        >
                          <label className="form-label">Bank Cheque</label>
                          {/* <input type="text" className="form-control"
                                                        name="deposteToAmrs"
                                                        value={formData10.deposteToAmrs}
                                                        onChange={handleInputChange10} /> */}
                          <select
                            className="form-control select2"
                            name="deposteToAmrs"
                            value={formData10.deposteToAmrs}
                            onChange={handleInputChange10}
                          >
                            <option value="">Select </option>
                            {bankList.map((option, index) => (
                              <option key={option.id} value={option.name}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </>
                    )}

                    {formData10.collectionMode === "Online" && (
                      <>
                        <div
                          className="col-sm-6 form-group"
                          style={{ marginTop: "10px" }}
                        >
                          <label className="form-label">Webkype Account</label>
                          <select
                            className="form-control select2"
                            name="amrsAccount"
                            value={formData10.amrsAccount}
                            onChange={handleInputChange10}
                          >
                            <option value="">Select </option>
                            {project.map((option, index) => (
                              <option key={option.id} value={option.id}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-sm-6 form-group">
                          <label className="form-label">Transaction No</label>
                          <input
                            type="text"
                            className="form-control"
                            name="transactionNo"
                            value={formData10.transactionNo}
                            onChange={handleInputChange10}
                          />
                        </div>
                        <div className="col-sm-6 form-group">
                          <label className="form-label">Payment Method</label>
                          <select
                            className="form-control select2"
                            name="remark"
                            value={formData10.remark}
                            onChange={handleInputChange10}
                          >
                            <option value="">Select</option>
                            <option>NEFT/IMPS/RTGS</option>
                            <option>UPI</option>
                            <option>POS</option>
                            <option>Link Payment</option>
                          </select>
                        </div>
                      </>
                    )}

                    <div className="col-sm-6 form-group">
                      <label className="form-label">Payment Credit Date </label>
                      <input
                        type="date"
                        className="form-control"
                        name="paymentCredit"
                        value={formData10.paymentCredit}
                        onChange={handleInputChange10}
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="form-label"> Upload Receipt</label>
                      <input
                        type="file"
                        className="form-control"
                        name="uploadRecipt"
                        accept="/pdf"
                        onChange={handleFileChange10}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="modal-footer"
                style={{
                  borderTop: "1px solid #dee2e6",
                  borderRadius: "0 0 10px 10px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <button
                  onClick={handleUpdate}
                  className="btn ripple btn-primary"
                  type="button"
                  style={{
                    borderRadius: "5px",
                    padding: "8px 20px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: loadingss ? "not-allowed" : "pointer",
                    opacity: loadingss ? 0.7 : 1,
                  }}
                  // onClick={handleSubmit}
                  disabled={loadingss}
                >
                  {loadingss ? "Loading..." : "Update"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* schedule registry */}
        <div
          className={`modal fade ${isRegistryScheduleOpens ? "show d-block" : ""
            }`}
          id="modaldemo-callback-form"
          tabIndex="-1"
          style={{
            display: isRegistryScheduleOpens ? "flex" : "none",
            top: "20px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            style={{ maxWidth: "40%", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <h5 className="modal-title">Schedule Registry</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsRegistryScheduleOpens(false)}
                  aria-label="Close"
                  style={{ outline: "none", cursor: "pointer" }}
                ></button>
              </div>

              <div className="modal-body" style={{ padding: "20px" }}>
                <form>
                  <div className="row row-sm">
                    <div className="col-sm-6 form-group">
                      <label className="form-label">Registry Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="registryName"
                        value={formDataRegistry.registryName || ""}
                        onChange={sheduleRegistryHandler}
                      />
                    </div>

                    <div className="col-sm-6 form-group">
                      <label className="form-label">Father's Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="fatherName"
                        value={formDataRegistry.fatherName || ""}
                        onChange={sheduleRegistryHandler}
                      />
                    </div>

                    <div className="col-sm-6 form-group">
                      <label className="form-label">Registry Location</label>
                      <input
                        type="text"
                        className="form-control"
                        name="registyLocation"
                        value={formDataRegistry.registyLocation || ""}
                        onChange={sheduleRegistryHandler}
                      />
                    </div>

                    <div className="col-sm-6 form-group">
                      <label className="form-label">Registry Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="registryDate"
                        value={formDataRegistry.registryDate || ""}
                        onChange={sheduleRegistryHandler}
                      />
                    </div>
                    {/* 
                    <div className="col-sm-6 form-group">
                      <label className="form-label">Registry Date & Time</label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        name="registryDateTime"
                        value={formDataRegistry.registryDateTime || ""}
                        onChange={sheduleRegistryHandler}
                      />
                    </div> */}

                    <div className="col-sm-6 form-group">
                      <label className="form-label">Unit No</label>
                      <input
                        type="text"
                        className="form-control"
                        name="unitNo"
                        value={formDataRegistry.unitNo || ""}
                        onChange={sheduleRegistryHandler}
                      />
                    </div>

                    <div className="col-sm-6 form-group">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        value={formDataRegistry.description || ""}
                        onChange={sheduleRegistryHandler}
                      ></textarea>
                    </div>

                    <div className="col-sm-6 form-group">
                      <label className="form-label">Upload Photo</label>
                      <input
                        type="file"
                        className="form-control"
                        name="registryImage"
                        accept="image/*"
                        onChange={sheduleRegistryHandler}
                      />
                    </div>

                    {/* Your existing logic for "Discount", "Cheque", "CDIB", "Online" modes goes here */}
                  </div>
                </form>
              </div>
              <div
                className="modal-footer"
                style={{
                  borderTop: "1px solid #dee2e6",
                  borderRadius: "0 0 10px 10px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <button
                  onClick={submitSheduleResigrty}
                  className="btn ripple btn-primary"
                  type="button"
                  style={{
                    borderRadius: "5px",
                    padding: "8px 20px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: sheduleRegistryLoading ? "not-allowed" : "pointer",
                    opacity: sheduleRegistryLoading ? 0.7 : 1,
                  }}
                  disabled={sheduleRegistryLoading}
                >
                  {sheduleRegistryLoading ? "Loading..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* schedule registry */}

        <div
          className={`modal fade ${isModalOpen11 ? "show d-block" : ""}`}
          id="modaldemo-callback-form"
          tabIndex="-1"
          style={{
            display: isModalOpen11 ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <div
            style={{
              maxWidth: "100%",
              margin: "auto",
              marginTop: "90px",
              padding: "30px 30px",
            }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <h5 className="modal-title">Payment History</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal11}
                  aria-label="Close"
                  style={{ outline: "none", cursor: "pointer" }}
                ></button>
              </div>

              {/* Modal body with scrollable content */}
              <div
                className="modal-body"
                style={{
                  padding: "20px",
                  maxHeight: "400px", // Set height limit for modal body
                  overflowY: "auto", // Enable vertical scrollbar when content overflows
                }}
              >
                <form>
                  <table align="center" width="100%">
                    <thead>
                      <tr>
                        <th>Amount Entry</th>
                        <th>Payment Mode</th>
                        <th>Bank Name/Mode</th>
                        <th>Account Number</th>
                        <th>CHQ/TRN No</th>
                        <th>Cheque Date</th>
                        <th>Payment Date</th>
                        <th>Actions Performed By</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userss.length > 0 ? (
                        userss.map((user) => (
                          <tr key={user.id}>
                            <td>
                              {user.amount}
                              <br />
                              {user.offeredDiscount ? (
                                <p>BD: {user.offeredDiscount}</p>
                              ) : null}
                            </td>
                            <td>{user?.collectionMode}</td>
                            <td>
                              {user?.collectionMode === "Online" ? (
                                <>{user?.remark || "N/A"}</>
                              ) : user?.collectionMode === "Cheque" ? (
                                <>{user?.deposteToAmrs || "N/A"}</>
                              ) : (
                                <>N/A</>
                              )}
                            </td>
                            <td>{user.accountNumber || "N/A"}</td>
                            <td>
                              {user?.collectionMode === "Cheque" ? (
                                <>{user?.chequeNo ? user.chequeNo : "N/A"}</>
                              ) : user?.collectionMode === "Online" ? (
                                <>
                                  {user?.transactionNo
                                    ? user.transactionNo
                                    : "N/A"}
                                </>
                              ) : (
                                <>N/A</>
                              )}
                            </td>
                            <td>
                              {user?.collectionMode === "Cheque" ? (
                                <>
                                  {user?.formattedDate
                                    ? user.formattedDate
                                    : "N/A"}
                                </>
                              ) : (
                                <>N/A</>
                              )}
                            </td>
                            <td>{user.formattedDate2 || "N/A"}</td>
                            <td>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div
                                  style={{
                                    width: "20px",
                                    height: "30px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    marginRight: "5px",
                                  }}
                                >
                                  <img
                                    src={
                                      user?.employee?.profilePhoto ||
                                      "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                                    }
                                    alt="Profile"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                                <div>
                                  {user?.employee?.fullName || "N/A"}
                                  <br />
                                  {user.formattedDates}
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="9">No data available</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`modal fade ${isModalOpen60 ? "show d-block" : ""}`}
          id="modaldemo-callback-form"
          tabIndex="-1"
          style={{
            display: isModalOpen60 ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            style={{ maxWidth: "100%", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f1f1f1",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                  padding: "15px 20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "'Rabbit', sans-serif",
                }}
              >
                <h5 className="modal-title" style={{ margin: 0 }}>
                  UID: {employee4.userId} ({employee4.applicantFirstName}{" "}
                  {employee4.applicantLastName})
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal60}
                  aria-label="Close"
                  style={{ outline: "none", cursor: "pointer" }}
                ></button>
              </div>

              <div
                className="modal-body"
                style={{
                  padding: "20px",
                  maxHeight: "calc(100vh - 200px)",
                  overflowY: "auto",
                }}
              >
                <div
                  style={{
                    maxHeight: "400px",
                    overflowY: "scroll",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#888 #f1f1f1",
                  }}
                >
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th style={{ whiteSpace: "nowrap" }}>ID</th>
                        <th style={{ whiteSpace: "nowrap" }}>Customer Name</th>
                        <th style={{ whiteSpace: "nowrap" }}>Scheme</th>
                        <th style={{ whiteSpace: "nowrap" }}>
                          Unit Allocation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {unitCounts.map((user) => (
                        <tr key={user.id}>
                          <td>
                            {user.userId}
                            <br />
                            <Link
                              to={`/Inventory-details/${user.id}`}
                              className="btn ripple btn-primary btn-xs w-70 equal-buttons"
                              target="__blank"
                              style={{
                                display: "block",
                                marginTop: "5px",
                                textDecoration: "none",
                                color: "#fff",
                                backgroundColor: "#007bff",
                                borderColor: "#007bff",
                                padding: "3px 6px",
                                borderRadius: "4px",
                                textAlign: "center",
                              }}
                            >
                              View
                            </Link>
                          </td>
                          <td>
                            {user.applicantFirstName} {user.applicantLastName}
                            <br />
                            <span style={{ fontWeight: "bold" }}>
                              TID:
                            </span>{" "}
                            {user.ticketId}
                          </td>
                          <td>{user.schemeId}</td>
                          <td style={{ whiteSpace: "nowrap" }}>
                            <span style={{ fontWeight: "bold" }}>Project:</span>{" "}
                            {user.projectName}
                            <br />
                            <span style={{ fontWeight: "bold" }}>
                              Unit Type:
                            </span>{" "}
                            {user.schemeType}
                            <br />
                            <span style={{ fontWeight: "bold" }}>
                              Unit Number:
                            </span>{" "}
                            {user.unitNo}
                            <br />
                            <span style={{ fontWeight: "bold" }}>
                              Payment Plan:
                            </span>{" "}
                            {user.paymentPlan}
                            <br />
                            <span style={{ fontWeight: "bold" }}>
                              Lucky Draw:
                            </span>{" "}
                            {user.luckyDrawId}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`modal fade ${isModalOpen56 ? "show d-block" : ""}`}
          id="modaldemo-callback-form"
          tabIndex="-1"
          style={{
            display: isModalOpen56 ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            style={{ maxWidth: "60%", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f1f1f1",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                  padding: "15px 20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "'Rabbit', sans-serif",
                }}
              >
                <h5 className="modal-title" style={{ margin: 0 }}>
                  View
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal56}
                  aria-label="Close"
                  style={{
                    outline: "none",
                    cursor: "pointer",
                  }}
                ></button>
              </div>

              <div
                className="modal-body"
                style={{
                  padding: "20px",
                  maxHeight: "calc(100vh - 200px)",
                  overflowY: "auto",
                }}
              >
                <div
                  style={{
                    maxHeight: "400px",
                    overflowY: "scroll",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#888 #f1f1f1",
                  }}
                >
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th style={{ whiteSpace: "nowrap" }}>ID</th>
                        <th style={{ whiteSpace: "nowrap" }}>view</th>
                        <th style={{ whiteSpace: "nowrap" }}>Create Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pdfView.map((user) => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>
                            <a
                              href={user.demandLetterPDF}
                              target="_blank"
                              style={{
                                marginLeft: "5px",
                                cursor: "pointer",
                                marginTop: "5px",
                              }}
                              title="View"
                            >
                              <i className="fa fa-eye me-3" />
                            </a>
                          </td>
                          <td>
                            {new Date(user.createdAt).toLocaleDateString(
                              "en-GB",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                            <br />
                            {new Date(user.createdAt).toLocaleTimeString(
                              "en-US",
                              {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                              }
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`modal fade ${isModalOpen58 ? "show d-block" : ""}`}
          id="modaldemo-callback-form"
          tabIndex="-1"
          style={{
            display: isModalOpen58 ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            style={{ maxWidth: "20%", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f1f1f1",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                  padding: "15px 20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "'Rabbit', sans-serif",
                }}
              >
                <h5 className="modal-title" style={{ margin: 0 }}>
                  View
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal58}
                  aria-label="Close"
                  style={{
                    outline: "none",
                    cursor: "pointer",
                  }}
                ></button>
              </div>

              <div
                className="modal-body"
                style={{
                  padding: "20px",
                  maxHeight: "calc(100vh - 200px)",
                  overflowY: "auto",
                }}
              >
                <div
                  style={{
                    maxHeight: "400px",
                    overflowY: "scroll",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#888 #f1f1f1",
                  }}
                >
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th style={{ whiteSpace: "nowrap" }}>Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{pdfViews?.deleteReason}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* delete the payment history */}
        <div
          className={`modal ${isModalOpens4 ? "show" : ""}`}
          style={{
            display: isModalOpens4 ? "block" : "none",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "auto",
          }}
          tabIndex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-sl"
            role="document"
            style={{ maxWidth: "400px", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <h5 className="modal-title">Permissions</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={handleCloseModals4}
                  style={{ outline: "none", cursor: "pointer" }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div
                className="modal-body d-flex justify-content-center align-items-center"
                style={{ padding: "20px", textAlign: "center" }}
              >
                <form>
                  <div className="modal-body">
                    <p>Are you sure you want to delete this payment?</p>
                    <textarea
                      className="form-control"
                      placeholder="Enter Reason..."
                      rows="3"
                      name="reason"
                      value={formData11.reason}
                      onChange={handleInputChange11}
                    />
                  </div>

                  <div className="modal-footer d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={deleteLead}
                    >
                      Delete
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* delete the payment history */}

        {/* delete noc payment history */}
        <div
          className={`modal ${isModalOpenNOCs4 ? "show" : ""}`}
          style={{
            display: isModalOpenNOCs4 ? "block" : "none",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "auto",
          }}
          tabIndex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-sl"
            role="document"
            style={{ maxWidth: "400px", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <h5 className="modal-title">Permissions</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={handleCloseModalNocs4}
                  style={{ outline: "none", cursor: "pointer" }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div
                className="modal-body d-flex justify-content-center align-items-center"
                style={{ padding: "20px", textAlign: "center" }}
              >
                <form>
                  <div className="modal-body">
                    <p>Are you sure you want to delete this noc payment?</p>
                    <textarea
                      className="form-control"
                      placeholder="Enter Reason..."
                      rows="3"
                      name="reason"
                      value={formDataNOC11.reason}
                      onChange={handleNocInputChange11}
                    />
                  </div>

                  <div className="modal-footer d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={deleteNOCLead}
                    >
                      Delete
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* delete noc payment history */}

        {/* no dues */}
        <div
          className={`modal ${isModalDueOpens ? "show" : ""}`}
          style={{
            display: isModalDueOpens ? "block" : "none",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "auto",
          }}
          tabIndex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-sl"
            role="document"
            style={{ minWidth: "800px", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <h5 className="modal-title">NO DUES CERTIFICATE </h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={handleCloseDueModal}
                  style={{ outline: "none", cursor: "pointer" }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div
                className="modal-body d-flex justify-content-center align-items-center"
                style={{ padding: "20px", textAlign: "center" }}
              >
                <form>
                  <div
                    className="modal-body"
                    style={{
                      padding: "20px",
                      textAlign: "left",
                      maxHeight: "70vh",
                      overflowY: "auto",
                    }}
                  >
                    <div className="text-center mb-3">
                      <img
                        src={receiptData?.data?.applicant?.project?.company?.profilePhoto} // replace with your actual logo path
                        alt="Company Logo"
                        style={{ maxHeight: "60px", objectFit: "contain" }}
                      />
                    </div>
                    <p>
                      This is to certify that{" "}
                      <strong>{receiptData?.data?.applicant?.fullName}</strong>,
                      residing at{" "}
                      <strong>
                        {receiptData?.data?.applicant?.applicantAddress}
                      </strong>
                      , has fully paid all dues and charges related to the unit
                      mentioned below and has no outstanding liabilities towards{" "}
                      <strong>
                        {" "}
                        {
                          receiptData?.data?.applicant?.project?.company
                            ?.companyName
                        }
                      </strong>{" "}
                      as of the date mentioned above.
                    </p>
                    <ul>
                      <li>
                        <strong>Project Name:</strong>{" "}
                        {receiptData?.data?.applicant?.project?.projectName}
                      </li>
                      <li>
                        <strong>Project Location:</strong>{" "}
                        {
                          receiptData?.data?.applicant?.project?.location
                            ?.locationName
                        }
                      </li>
                      <li>
                        <strong>Unit Number:</strong>{" "}
                        {receiptData?.data?.applicant?.unitNo}
                      </li>
                    </ul>
                    <p>
                      We acknowledge the receipt of all payments due from the
                      above-named client for the aforesaid unit, including but
                      not limited to booking amount, installments, maintenance
                      charges, and any other applicable charges.
                    </p>
                    <p>
                      Accordingly, we hereby issue this{" "}
                      <strong>No Dues Certificate</strong> as a confirmation
                      that there are no further dues pending from the client to{" "}
                      <strong>
                        {" "}
                        {
                          receiptData?.data?.applicant?.project?.company
                            ?.companyName
                        }
                      </strong>{" "}
                      for the mentioned unit.
                    </p>
                    <p>
                      This certificate is being issued upon the client’s request
                      and can be used for any legal, personal, or financial
                      purposes as deemed necessary.
                    </p>
                    <br />
                    <p>Sincerely,</p>
                    <p>
                      <strong>
                        For{" "}
                        {
                          receiptData?.data?.applicant?.project?.company
                            ?.companyName
                        }
                      </strong>
                    </p>
                    <img
                      // style="width: 20%;"
                      src="https://erp-api.amrealtysolutions.com/uploads/DhnaultyHeightSign.jpg"
                      alt=""
                      height={60}
                      width={100}
                    />
                    <p>
                      <strong>Apoorva Srivastava</strong>
                    </p>

                    <button
                      // onClick={handleUpdate}
                      className="btn ripple btn-primary"
                      type="button"
                      style={{
                        borderRadius: "5px",
                        padding: "8px 20px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        cursor: IsDueReceiptDueOpens
                          ? "not-allowed"
                          : "pointer",
                        opacity: IsDueReceiptDueOpens ? 0.7 : 1,
                      }}
                      onClick={() => getDueReceiptData(receiptData?.data?.id)}
                      disabled={IsDueReceiptDueOpens}
                    >
                      {IsDueReceiptDueOpens ? "Loading..." : "Send To Client"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* no dues */}

        {/* NAME CHANGE RECEIPT  */}
        <div
          className={`modal ${isModalNameChangeOpens ? "show" : ""}`}
          style={{
            display: isModalNameChangeOpens ? "block" : "none",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "auto",
          }}
          tabIndex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-sl"
            role="document"
            style={{ minWidth: "600px", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <h5 className="modal-title">NAME CHANGE RECEIPT</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={handleCloseNameChangeModal}
                  style={{ outline: "none", cursor: "pointer" }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div
                className="modal-body d-flex justify-content-center align-items-center"
                style={{ padding: "20px", textAlign: "center" }}
              >
                <form>
                  <div
                    className="modal-body"
                    style={{
                      padding: "20px",
                      textAlign: "left",
                      maxHeight: "70vh",
                      overflowY: "auto",
                    }}
                  >
                    <div className="text-center mb-3">
                      <img
                        src={receiptData?.data?.applicant?.project?.company?.profilePhoto} // replace with your actual logo path
                        alt="Company Logo"
                        style={{ maxHeight: "60px", objectFit: "contain" }}
                      />
                    </div>
                    <p>
                      <strong>
                        Date:{" "}
                        {new Date(
                          receiptData?.data?.createdAt
                        ).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </strong>
                    </p>
                    <p>
                      <strong>Subject:</strong> Acknowledgment of Name Change
                      Request for Registry Purposes
                    </p>
                    <p>Dear {receiptData?.data?.applicant?.fullName},</p>
                    <p>
                      This is to acknowledge the receipt of your request to
                      change the name in the property registry for the unit
                      booked under the following details:
                    </p>
                    <ul>
                      <li>
                        Project Name:{" "}
                        {receiptData?.data?.applicant?.project?.projectName}
                      </li>
                      <li>
                        Unit Number: {receiptData?.data?.applicant?.unitNo}
                      </li>
                      <li>
                        Original Booking Name:{" "}
                        {receiptData?.data?.applicant?.fullName}
                      </li>
                      <li>
                        New Registered Name:{" "}
                        {receiptData?.data?.applicant?.nameOnRegistry}
                      </li>
                    </ul>
                    <p>
                      We confirm that we have received the necessary documents
                      and authorization from your end for this name change. The
                      process of updating the registry records is underway, and
                      all relevant departments have been notified accordingly.
                    </p>
                    <p>
                      Please note that this change is being processed in
                      accordance with the terms and conditions of our agreement
                      and upon your written request.
                    </p>
                    <br />
                    <p>
                      For{" "}
                      {
                        receiptData?.data?.applicant?.project?.company
                          ?.companyName
                      }
                    </p>
                    <p>CRM Department</p>
                    <button
                      // onClick={handleUpdate}
                      className="btn ripple btn-primary"
                      type="button"
                      style={{
                        borderRadius: "5px",
                        padding: "8px 20px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        cursor: isNameChangeReceiptDueOpens
                          ? "not-allowed"
                          : "pointer",
                        opacity: isNameChangeReceiptDueOpens ? 0.7 : 1,
                      }}
                      onClick={() =>
                        getNameChangeReceiptData(receiptData?.data?.id)
                      }
                      disabled={isNameChangeReceiptDueOpens}
                    >
                      {isNameChangeReceiptDueOpens
                        ? "Loading..."
                        : "Send To Client"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* NAME CHANGE RECEIPT  */}

        {/* CHEUQUE BOUNCE RECEIPT  */}
        <div
          className={`modal ${isModalChequeOpens ? "show" : ""}`}
          style={{
            display: isModalChequeOpens ? "block" : "none",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "auto",
          }}
          tabIndex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-sl"
            role="document"
            style={{ minWidth: "600px", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <h5 className="modal-title">CHEQUE BOUNCE RECEIPT</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={handleCloseChequeModal}
                  style={{ outline: "none", cursor: "pointer" }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div
                className="modal-body d-flex justify-content-center align-items-center"
                style={{ padding: "20px", textAlign: "center" }}
              >
                <form>
                  <div
                    className="modal-body"
                    style={{
                      padding: "20px",
                      textAlign: "left",
                      maxHeight: "70vh",
                      overflowY: "auto",
                    }}
                  >
                    <div className="text-center mb-3">
                      <img
                        src={receiptData?.data?.applicant?.project?.company?.profilePhoto} // replace with your actual logo path
                        alt="Company Logo"
                        style={{ maxHeight: "60px", objectFit: "contain" }}
                      />
                    </div>
                    <p>
                      <strong>RECEIPT</strong>
                    </p>
                    <p>
                      <strong>
                        Date:{" "}
                        {new Date(
                          receiptData?.data?.createdAt
                        ).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </strong>
                    </p>
                    <p>
                      Received from{" "}
                      <strong> {receiptData?.data?.applicant?.fullName}</strong>
                      , an amount of ₹<strong>{receiptData?.data?.chequeBounceCharges}</strong>{" "}
                      (Rupees <strong>{receiptData?.data?.chequeBounceChargesInWords}</strong> only), towards
                      the clearance of cheque bounce charges for Unit No.{" "}
                      <strong>{receiptData?.data?.applicant?.unitNo}</strong> in
                      the project{" "}
                      <strong>
                        {" "}
                        {receiptData?.data?.applicant?.project?.projectName}
                      </strong>
                      , being developed by{" "}
                      <strong>
                        {" "}
                        {
                          receiptData?.data?.applicant?.project?.company
                            ?.companyName
                        }
                      </strong>
                      .
                    </p>
                    <p>
                      This receipt serves as an acknowledgment that the
                      above-mentioned amount has been received in full and
                      settled against the respective charges. No further dues
                      are pending under this head as of the date of this
                      receipt.
                    </p>
                    <br />
                    <p>
                      For{" "}
                      <strong>
                        {" "}
                        {
                          receiptData?.data?.applicant?.project?.company
                            ?.companyName
                        }
                      </strong>
                    </p>
                    <p>CRM Department</p>
                    <button
                      // onClick={handleUpdate}
                      className="btn ripple btn-primary"
                      type="button"
                      style={{
                        borderRadius: "5px",
                        padding: "8px 20px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        cursor: isCheckBounceReceiptDueOpens
                          ? "not-allowed"
                          : "pointer",
                        opacity: isCheckBounceReceiptDueOpens ? 0.7 : 1,
                      }}
                      onClick={() =>
                        getCheckBounceReceiptData(receiptData?.data?.id)
                      }
                      disabled={isCheckBounceReceiptDueOpens}
                    >
                      {isCheckBounceReceiptDueOpens
                        ? "Loading..."
                        : "Send To Client"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* CHEUQUE BOUNCE RECEIPT  */}

        {/* INTEREST RECEIPT  */}
        <div
          className={`modal ${isModalInterestOpens ? "show" : ""}`}
          style={{
            display: isModalInterestOpens ? "block" : "none",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "auto",
          }}
          tabIndex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-sl"
            role="document"
            style={{ minWidth: "600px", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                }}
              >

                <h5 className="modal-title">INTEREST RECEIPT</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={handleCloseInterestModal}
                  style={{ outline: "none", cursor: "pointer" }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div
                className="modal-body d-flex justify-content-center align-items-center"
                style={{ padding: "20px", textAlign: "center" }}
              >

                <form>
                  <div
                    className="modal-body"
                    style={{
                      padding: "20px",
                      textAlign: "left",
                      maxHeight: "70vh",
                      overflowY: "auto",
                    }}
                  >
                    <div className="text-center mb-3">
                      <img
                        src={receiptData?.data?.applicant?.project?.company?.profilePhoto} // replace with your actual logo path
                        alt="Company Logo"
                        style={{ maxHeight: "60px", objectFit: "contain" }}
                      />
                    </div>
                    <p>
                      Received from{" "}
                      <strong> {receiptData?.data?.applicant?.fullName}</strong>
                      , an amount of ₹<strong>{receiptData?.data?.intrestAmount}</strong>{" "}
                      (Rupees <strong>{receiptData?.data?.intrestAmountInWords}</strong> only), towards
                      interest for Unit No.{" "}
                      <strong>{receiptData?.data?.applicant?.unitNo}</strong> in
                      the project{" "}
                      <strong>
                        {receiptData?.data?.applicant?.project?.projectName}
                      </strong>
                      , being developed by{" "}
                      <strong>
                        {" "}
                        {
                          receiptData?.data?.applicant?.project?.company
                            ?.companyName
                        }
                      </strong>
                      .
                    </p>
                    <p>
                      This receipt serves as an acknowledgment that the
                      above-mentioned amount has been received in full and
                      settled against the respective charges. No further dues
                      are pending under this head as of the date of this
                      receipt.
                    </p>
                    <br />
                    <p>
                      For{" "}
                      <strong>
                        {" "}
                        {
                          receiptData?.data?.applicant?.project?.company
                            ?.companyName
                        }
                      </strong>
                    </p>
                    <p>CRM Department</p>
                    <button
                      // onClick={handleUpdate}
                      className="btn ripple btn-primary"
                      type="button"
                      style={{
                        borderRadius: "5px",
                        padding: "8px 20px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        cursor: isInterestReceiptDueOpens
                          ? "not-allowed"
                          : "pointer",
                        opacity: isInterestReceiptDueOpens ? 0.7 : 1,
                      }}
                      onClick={() =>
                        getInterestReceiptData(receiptData?.data?.id)
                      }
                      disabled={isInterestReceiptDueOpens}
                    >
                      {isInterestReceiptDueOpens
                        ? "Loading..."
                        : "Send To Client"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* INTEREST RECEIPT */}

        {/* MAINTENANCE RECEIPT  */}
        <div
          className={`modal ${isModalMaintenanceOpens ? "show" : ""}`}
          style={{
            display: isModalMaintenanceOpens ? "block" : "none",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "auto",
          }}
          tabIndex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-sl"
            role="document"
            style={{ minWidth: "600px", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <h5 className="modal-title">MAINTENANCE RECEIPT</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={handleCloseMaintenanceModal}
                  style={{ outline: "none", cursor: "pointer" }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div
                className="modal-body d-flex justify-content-center align-items-center"
                style={{ padding: "20px", textAlign: "center" }}
              >
                <form>
                  <div
                    className="modal-body"
                    style={{
                      padding: "20px",
                      textAlign: "left",
                      maxHeight: "70vh",
                      overflowY: "auto",
                    }}
                  >
                    {/* New Section Starts */}
                    <div className="text-center mb-3">
                      <img
                        src={receiptData?.data?.applicant?.project?.company?.profilePhoto} // replace with your actual logo path
                        alt="Company Logo"
                        style={{ maxHeight: "60px", objectFit: "contain" }}
                      />
                    </div>
                    <p>
                      <strong>Date:</strong>{" "}
                      {new Date(
                        receiptData?.data?.createdAt
                      ).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p>
                      <strong>Client Name:</strong>{" "}
                      {receiptData?.data?.applicant?.fullName}
                    </p>
                    <p>
                      <strong>Address:</strong>{" "}
                      {receiptData?.data?.applicant?.applicantAddress}
                    </p>
                    <p>
                      <strong>Mobile Number:</strong>{" "}
                      {receiptData?.data?.applicant?.applicantMobile}
                    </p>
                    <p>
                      <strong>Project Name:</strong>{" "}
                      {receiptData?.data?.applicant?.project?.projectName}
                    </p>
                    <p>
                      <strong>Project Location:</strong>{" "}
                      {
                        receiptData?.data?.applicant?.project?.location
                          ?.locationName
                      }
                    </p>
                    <p>
                      <strong>Unit Number:</strong>{" "}
                      {receiptData?.data?.applicant?.unitNo}
                    </p>
                    <p>
                      <strong>Area of Unit:</strong>{" "}
                      {receiptData?.data?.applicant?.size} sq. yd / sq. ft
                    </p>
                    <hr />
                    <h6>
                      <strong>Maintenance Charges</strong>
                    </h6>
                    <p>
                      <strong>Rate of Maintenance:</strong> ₹
                      {receiptData?.data?.camRate} per sq. yd / sq. ft
                    </p>
                    <p>
                      <strong>Maintenance Period:</strong> From{" "}
                      {new Date(
                        receiptData?.data?.camStartDate
                      ).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      to
                      {receiptData?.data?.camEndDate
                        ? new Date(
                          receiptData?.data?.camEndDate
                        ).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                        : "[End Date]"}
                    </p>

                    <p>
                      <em>
                        Note: This receipt acknowledges the payment received
                        towards maintenance charges for the mentioned period.
                        Please retain this document for your records.
                      </em>
                    </p>
                    <p>
                      <strong>
                        For{" "}
                        {
                          receiptData?.data?.applicant?.project?.company
                            ?.companyName
                        }
                      </strong>
                    </p>
                    <p>
                      <strong>CRM Department</strong>
                    </p>
                    <hr />
                    {/* New Section Ends */}

                    {/* Existing No Dues Certificate */}
                    <button
                      // onClick={handleUpdate}
                      className="btn ripple btn-primary"
                      type="button"
                      style={{
                        borderRadius: "5px",
                        padding: "8px 20px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        cursor: isMaintenanceReceiptDueOpens
                          ? "not-allowed"
                          : "pointer",
                        opacity: isMaintenanceReceiptDueOpens ? 0.7 : 1,
                      }}
                      onClick={() =>
                        getDueMaintenanceReceiptData(receiptData?.data?.id)
                      }
                      disabled={isMaintenanceReceiptDueOpens}
                    >
                      {isMaintenanceReceiptDueOpens
                        ? "Loading..."
                        : "Send To Client"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* MAINTENANCE RECEIPT */}

        {/* GST  */}
        <div
          className={`modal ${isModalGSTOpens ? "show" : ""}`}
          style={{
            display: isModalGSTOpens ? "block" : "none",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "auto",
          }}
          tabIndex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-sl"
            role="document"
            style={{ minWidth: "800px", margin: "auto" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderBottom: "1px solid #dee2e6",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <h5 className="modal-title">
                  GST INVOICE FOR CAM PAYMENT (IF PAID GST BY CLIENT)
                </h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={handleCloseGSTModal}
                  style={{ outline: "none", cursor: "pointer" }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div
                className="modal-body d-flex justify-content-center align-items-center"
                style={{ padding: "20px", textAlign: "center" }}
              >
                <div
                  className="container-fluid p-4"
                  style={{ maxWidth: "800px", margin: "0 auto" }}
                >
                  <div className="text-center mb-3">
                    <img
                      src={receiptData?.data?.applicant?.project?.company?.profilePhoto} // replace with your actual logo path
                      alt="Company Logo"
                      style={{ maxHeight: "60px", objectFit: "contain" }}
                    />
                  </div>
                  <table
                    className="table table-bordered border-dark border-2 mb-0"
                    style={{ fontSize: "12px" }}
                  >
                    <thead>
                      <tr>
                        <td
                          colSpan="2"
                          className="text-center py-2 border-dark border-2"
                        >
                          <h4 className="mb-1 fw-bold">Tax Invoice</h4>
                          <small className="text-muted">
                            (ORIGINAL FOR RECIPIENT)
                          </small>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Company and Invoice Details */}
                      <tr>
                        <td
                          className="border-dark border-2 p-3"
                          style={{ width: "50%", verticalAlign: "top" }}
                        >
                          <div className="fw-bold">AM ENTERPRISES</div>
                          <div>F-512, SILVER CROWN VARDHMAN GROUP</div>
                          <div>LAJPAT NAGAR, GANDHI PATH</div>
                          <div>JAIPUR, RAJASTHAN</div>
                          <div>GSTIN/UIN: 08AEQPM7377A1Z5</div>
                          <div>State Name : Rajasthan, Code : 08</div>
                        </td>
                        <td
                          className="border-dark border-2 p-0"
                          style={{ verticalAlign: "top" }}
                        >
                          <table
                            className="table table-bordered border-dark border-2 mb-0 h-100"
                            style={{ fontSize: "12px" }}
                          >
                            <tbody>
                              <tr>
                                <td
                                  className="fw-bold border-dark border-1 p-2"
                                  style={{ width: "50%" }}
                                >
                                  Invoice No.
                                </td>
                                <td className="fw-bold border-dark border-1 p-2">
                                  Dated
                                </td>
                              </tr>
                              <tr>
                                <td className="border-dark border-1 p-2">
                                  {receiptData?.data?.id}/AME
                                </td>
                                <td className="border-dark border-1 p-2">
                                  {format(new Date(), 'dd-MMM-yyyy')}
                                </td>
                              </tr>
                              <tr>
                                <td className="border-dark border-1 p-2">
                                  Delivery Note
                                </td>
                                <td className="border-dark border-1 p-2">
                                  Mode/Terms of Payment
                                </td>
                              </tr>
                              <tr>
                                <td className="border-dark border-1 p-2">
                                  Buyer's Order No.
                                </td>
                                <td className="border-dark border-1 p-2">
                                  Dated
                                </td>
                              </tr>
                              <tr>
                                <td className="border-dark border-1 p-2">
                                  Despatch Document No.
                                </td>
                                <td className="border-dark border-1 p-2">
                                  Delivery Note Date
                                </td>
                              </tr>
                              <tr>
                                <td className="border-dark border-1 p-2">
                                  Despatched through
                                </td>
                                <td className="border-dark border-1 p-2">
                                  Destination
                                </td>
                              </tr>
                              <tr>
                                <td
                                  colSpan="2"
                                  className="border-dark border-1 p-2"
                                >
                                  Terms of Delivery
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>

                      {/* Buyer Details */}
                      <tr>
                        <td
                          className="border-dark border-2 p-3"
                          style={{ verticalAlign: "top" }}
                        >
                          <div className="fw-bold mb-2">Buyer</div>
                          {/* <div>Ravi Wadhawa-H-05-, Heritage City</div>
                          <div>
                            Tehsil-Phulera Sambhar, Distt.-Jaipur, Rajasthan
                          </div>
                          <div>PAN/IT No.</div>
                          <div>State Name : Rajasthan, Code : 08</div>
                          <div>Place of Supply : Rajasthan</div> */}
                          {/* <div>{receiptData?.data?.clientAddress}</div> */}
                          {receiptData?.data?.clientAddress
                            ?.split(' ')
                            ?.reduce((acc, word, index) => {
                              const lineIndex = Math.floor(index / 5);
                              acc[lineIndex] = acc[lineIndex] ? acc[lineIndex] + ' ' + word : word;
                              return acc;
                            }, [])
                            ?.map((line, idx) => (
                              <div key={idx}>{line}</div>
                            ))}
                        </td>
                        <td
                          className="border-dark border-2 p-3"
                          style={{ verticalAlign: "top" }}
                        ></td>
                      </tr>

                      {/* Service Details */}
                      <tr>
                        <td colSpan="2" className="border-dark border-2 p-0">
                          <table
                            className="table table-bordered border-dark border-2 mb-0"
                            style={{ fontSize: "12px" }}
                          >
                            <thead>
                              <tr>
                                <th
                                  className="text-center border-dark border-1 p-2"
                                  style={{ width: "40px" }}
                                >
                                  Sl No.
                                </th>
                                <th className="text-center border-dark border-1 p-2">
                                  Description of Services
                                </th>
                                <th
                                  className="text-center border-dark border-1 p-2"
                                  style={{ width: "80px" }}
                                >
                                  HSN/SAC
                                </th>
                                <th
                                  className="text-center border-dark border-1 p-2"
                                  style={{ width: "80px" }}
                                >
                                  Quantity
                                </th>
                                <th
                                  className="text-center border-dark border-1 p-2"
                                  style={{ width: "100px" }}
                                >
                                  Amount
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center border-dark border-1 p-2">
                                  1
                                </td>
                                <td className="border-dark border-1 p-2 fst-italic">
                                  Repair Maintenance Service Charges
                                </td>
                                <td className="text-center border-dark border-1 p-2">
                                  9954
                                </td>
                                <td className="border-dark border-1 p-2"></td>
                                <td className="text-end border-dark border-1 p-2">
                                  {receiptData?.data?.finalNocAmountwithGst}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>

                      {/* Total and Remarks */}
                      <tr>
                        <td className="border-dark border-2 p-3">
                          <div>
                            Amount Chargeable (in words)
                          </div>
                          <div className="fw-bold">
                            {receiptData?.data?.finalNocAmountwithGstInWord
                              ?.split(' ')
                              ?.reduce((acc, word, index) => {
                                const lineIndex = Math.floor(index / 5);
                                acc[lineIndex] = acc[lineIndex] ? acc[lineIndex] + ' ' + word : word;
                                return acc;
                              }, [])
                              ?.map((line, idx) => (
                                <div key={idx}>{line}</div>
                              ))} Only
                          </div>
                        </td>
                        <td className="border-dark border-2 p-3 text-end">
                          <div className="fw-bold">Total</div>
                          <div className="fw-bold fs-4">₹ {receiptData?.data?.finalNocAmountwithGst}</div>
                          <small className="text-muted">E. & O.E</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <button
                    // onClick={handleUpdate}
                    className="btn ripple btn-primary"
                    type="button"
                    style={{
                      borderRadius: "5px",
                      padding: "8px 20px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      cursor: isGSTReceiptDueOpens ? "not-allowed" : "pointer",
                      opacity: isGSTReceiptDueOpens ? 0.7 : 1,
                    }}
                    onClick={() => getGSTReceiptData(receiptData?.data?.id)}
                    disabled={isGSTReceiptDueOpens}
                  >
                    {isGSTReceiptDueOpens ? "Loading..." : "Send To Client"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* GST */}

        <div className="main-footer text-center">
          <div className="">
            <div className="row row-sm">
              <div className="col-md-12">
                <span>
                  Copyright © 2024 <a href="javascript:void(0)">Webkype</a>.
                  Designed by <a href="http://webkype.com/">Webkype.com</a> All
                  rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingalPaymentLadger;
