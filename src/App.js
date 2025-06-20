// routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import NextPage from "./Components/NextPage";
import Firstpage from "./Pages/Dashboard";
import Employee from "./Employee";
import CondidateList from "./Pages/condidateList";
import ConditateEmployee from "./Pages/ConditateEmployee";
import EditCompany from "./Pages/Sales CRM/page/EditCompany";
import EditCustomer from "./Pages/EditCustomer";
import EditEoiCustomer from "./Pages/EditEoiCustomer";
import AddLocation from "./Pages/AddLocation";
import AddVendor from "./Pages/AddVendor";
import VendorList from "./Pages/VendorList";
import ProjectEdit from "./Pages/ProjectEdit";
import ListLocation from "./Pages/ListLocation";
import ApplicantLists from "./Pages/ApplicantLists";
import UploadResult from "./Pages/UploadResult";
import LocationEdit from "./Pages/LocationEdit";
import LeadDetails from "./Pages/LeadDetails";
import VendorEdits from "./Components/VendorEdits";
import SalesLeads from "./Pages/SalesLeads";
import AddScheme from "./Pages/AddScheme";
import EdidScheme from "./Pages/EdidScheme";
import ListScheme from "./Pages/ListScheme";
import DelectApplicantList from "./Pages/DelectApplicantList";
import AddSalesLead from "./Pages/AddSalesLead";
import SalesLead from "./Pages/SalesLead";
import EditLeads from "./Pages/EditLeads";
import Inactive from "./Pages/Inactive";
import CondidateEdit from "./Pages/CondidateEdit";
import AddCondidate from "./Components/addCondidate";
import Permissions from "./Pages/Permissions";
import IncentivePlan from "./Pages/IncentivePlan";
import IncentivePlanList from "./Pages/IncentivePlanList";
import NOCList from "./Pages/NOCList";
import DuePayments from "./Pages/DuePayments";
import Registry from "./Pages/Registry";
import OwnersListing from "./Pages/OwnersListing";
import ProjectReports from "./Pages/ProjectReports";
import SchemeReports from "./Pages/SchemeReports";
import StaffReports from "./Pages/StaffReports";
import ApplicationsReports from "./Pages/ApplicationsReports";
import ApplicationsResults from "./Pages/ApplicationsResults";
import WelcomeLetterReports from "./Pages/WelcomeLetterReports";
import AllocationLetters from "./Pages/AllocationLetters";
import DemandLettersReport from "./Pages/DemandLettersReport";
import CancelledAllotmentsReport from "./Pages/CancelledAllotmentsReport";
import DrawRefundReports from "./Pages/DrawRefundReports";
import DuePayementsReport from "./Pages/DuePayementsReport";
import OwnersReports from "./Pages/OwnersReports";
import NOCReports from "./Pages/NOCReports";
import RegistryReports from "./Pages/RegistryReports";
import PaymentReports from "./Pages/PaymentReports";
import GiftAllocationReport from "./Pages/GiftAllocationReport";
import UnitAllocationReport from "./Pages/UnitAllocationReport";
import InventoryReport from "./Pages/InventoryReport";
import SalesLeadsReport from "./Pages/SalesLeadsReport";
import AttendanceReport from "./Pages/AttendanceReport";
import CustomerCeacalLatter from "./Pages/CustomerCeacalLatter";
import UnitAllocation from "./Pages/UnitAllocation";
import IncentivePayOut from "./Pages/IncentivePayOut";
import WelComeLatterViews from "./Pages/WelComeLatterViews";
import ChangeKycRequest from "./Pages/ChangeKycRequest";
import ChangeUnitRequest from "./Pages/ChangeUnitRequest";
import WelComeLatterView from "./Pages/WelComeLatterView";
import ViewRecipts from "./Pages/ViewRecipts";
import ViewReciptsEoi from "./Pages/ViewReciptsEoi";
import DemandLatterView from "./Pages/DemandLatterView";
import ViewAlltmentLatter from "./Pages/ViewAlltmentLatter";
import PaymentInformation from "./Pages/PaymentInformation";
import PlanChange from "./Pages/PlanChange";
import FinalPaymentIntimation from "./Pages/FinalPaymentIntimation";
import FinalCancel from "./Pages/FinalCancel";
import Eqi from "./Pages/Eqi";
import EqiLetter from "./Pages/EqiLetter";
import FinalDemandNotice from "./Pages/FinalDemandNotice";
import CancellationLetter from "./Pages/CancellationLetter";
import DemandNotice from "./Pages/DemandNotice";
import SingalPaymentLadger from "./Pages/SingalPaymentLadger";
import SinglePaymentLadage from "./Pages/SinglePaymentLadage";
import PaymentRecipetEoi from "./Pages/PaymentRecipetEoi";
import Announcement from "./Pages/Announcement";
import AnnouncementList from "./Pages/AnnouncementList";
import InventoryChecks from "./Pages/InventoryChecks";
import Welcome from "./Pages/Welcome";
import EditPlals from "./Pages/EditPlals";
import EmployeeEdit from "./Pages/EmployeeEdit";
import LuckyDraw from "./Pages/LuckyDraw";
import LuckyDrawList from "./Pages/LuckyDrawList";
import InActiveEmployee from "./Pages/InActiveEmployee";
import AllocatedList from "./Pages/AllocatedList";
import OwnershipList from "./Pages/OwnerShipList";
import NotAllocatedList from "./Pages/NotAllocatedList";
import NewLead from "./Pages/NewLead";
import AllPaymentRemainder from "./Pages/AllPaymentRemainder";
import AllNoticeList from "./Pages/AllNoticeList";
import NotEnquired from "./Pages/NotEnquired";
import NotInterested from "./Pages/NotInterested";
import NotConnected from "./Pages/NotConnected ";
import HotLead from "./Pages/HotLead";
import MeetingDone from "./Pages/MeetingDone";
import FormDone from "./Pages/FormDone";
import FolloUpDone from "./Pages/FolloUpDone";
import SalesProjection from "./Pages/SalesProjection";
import Outstation from "./Pages/Outstation";
import Search from "./Pages/Search";
import DeadOtherIssue from "./Pages/DeadOtherIssue";
import PaymentReceived from "./Pages/PaymentReceived";
import PaymentReceiveds from "./Pages/PaymentReceiveds";
import DeadBudgetIssue from "./Pages/DeadBudgetIssue";
import CreatePlan from "./Pages/CreatePlan";
import PlanView from "./Pages/PlanView";
import EditLuckeyDraw from "./Pages/EditLuckeyDraw";
import LeadDownloadList from "./Pages/LeadDownloadList";
import RefundRequestPending from "./Pages/RefundRequestPending";
import OldPlan from "./Pages/OldPlan";
import NewPlan from "./Pages/NewPlan";
import DocumentList from "./Pages/DocumentList";
import UserApplicant from "./Pages/UserApplicant";
import UserSignUpOtpList from "./Pages/UserSignUpOtpList";
import DefaultPage from "./Pages/DefaultPage";
import Applicant from "./Pages/Applicant";
import NotAllocated from "./Pages/NotAllocated";
import CrmProjectList from "./Pages/CrmProjectList";
import AddCrmProject from "./Pages/AddCrmProject";
import AllSelsLeads from "./Pages/AllSelsLeads";
import SalesStaff from "./Pages/SalesStaff";
import SalesDashboard from "./Pages/SalesDashboard";
import LeadGeneration from "./Pages/LeadGeneration";
import DataBank from "./Pages/DataBank";
import AttendanceListss from "./Pages/AttendanceListss";
import TeamManager from "./Pages/TeamManager";
import SalarySheet from "./Pages/SalarySheet";
import SalarySheetList from "./Pages/SalarySheetList";
import SalarySlip from "./Pages/SalarySlip";
import LeadDashboardS from "./Pages/LeadDashboardS";
import SalaryGenerate from "./Pages/SalaryGenerate";
import LeadReport from "./Pages/LeadReport";
import TeamReport from "./Pages/TeamReport";
import EditTeamManager from "./Pages/EditTeamManager";
import ManageEoi from "./Pages/ManageEoi";
import AddEoiProject from "./Pages/AddEoiProject";
import EoiInventory from "./Pages/EoiInventory";
import ApplicantVerified from "./Pages/ApplicantVerified";
import ApplicantApproved from "./Pages/ApplicantApproved";
import UnitAllocationApplicant from "./Pages/UnitAllocationApplicant";
import AddEoiPlan from "./Pages/AddEoiPlan";
import EoiPlanList from "./Pages/EoiPlanList";
import EoiInventoryList from "./Pages/EoiInventoryList";
import ProjectPlanView from "./Pages/ProjectPlanView";
import EoiDetails from "./Pages/EoiDetails";
import EoiSinglePaymentEntry from "./Pages/EoiSinglePaymentEntry";
import EoiSinglePaymentLadger from "./Pages/EoiSinglePaymentLadger";
import EoiAllotmentLetter from "./Pages/EoiAllotmentLetter";
import EoiProjectEdit from "./Pages/EoiProjectEdit";
import RefundRequest from "./Pages/RefundRequest";
import DuplicatePlanEoi from "./Pages/DuplicatePlanEoi";
import EOIWelcomeLetter from "./Pages/EOIWelcomeLetter";
import AllotmentLetterPrint from "./Pages/AllotmentLetterPrint";
import NotEoiApplication from "./Pages/NotEoiApplication";
import NotEoiApplications from "./Pages/NotEoiApplications";
import EoiInventoryListss from "./Pages/EoiInventoryListss";
import EoiDemandLatter from "./Pages/EoiDemandLatter";
import EoiDemandLatterPrint from "./Pages/EoiDemandLatterPrint";
import ReportOne from "./Pages/ReportOne";
import SalesDashboardss from "./Pages/SalesDashboardss";
import InventoryDashboard from "./Pages/InventoryDashboard";
import NotificatioList from "./Pages/NotificatioList";
import PricingList from "./Pages/PricingList";
import GalleryList from "./Pages/GalleryList";
import FileManager from "./Pages/FileManager";
import Calendar from "./Pages/Calendar";
import ProjectInventorys from "./Pages/ProjectInventorys";
import LetterApplicants from "./Pages/LetterApplicants";
import LdubNotAllocated from "./Pages/LdubNotAllocated";
import LdubsApplication from "./Pages/LdubsApplication";
import WldApplicant from "./Pages/WldApplicant";
import LuckyDrawInventory from "./Pages/LuckyDrawInventory";
import UndertakingForm from "./Pages/UndertakingForm";
import ApprovedApplication from "./Pages/ApprovedApplication";
import JunkApplication from "./Pages/JunkApplication";
import UnApprovedApplication from "./Pages/UnApprovedApplication";
import WelComelatter from "./Pages/WelComelatter";
import LdApprovedApplication from "./Pages/LdApprovedApplication";
import WldCustomer from "./Pages/WldCustomer";
import WldJunk from "./Pages/WldJunk";
import ContactEnquiries from "./Pages/ContactEnquiries";
import Blog from "./Pages/Blog";
import Faq from "./Pages/Faq";
import AddBookingAmount from "./Components/AddBookingAmount ";
import InventoryCheckData from "./Pages/InventoryCheckData";
import SendwelcomeData from "./Components/SendwelcomeData";
import ChequeLedger from "./Pages/ChequeLedger";
import Testimonial from "./Testimonial";
import BlogList from "./Pages/BlogList";
import EditBlog from "./Pages/EditBlog";
import TestimonialList from "./Pages/TestimonialList";
import CustomerReview from "./Pages/customerReview";
import TestimonialEdit from "./Pages/TestimonialEdit";
import AddMedia from "./Pages/AddMedia";
import MediaList from "./Pages/MediaList";
import MediaEdit from "./Pages/MediaEdit";
import FaqList from "./Pages/FaqList";
import FaqEdit from "./Pages/FaqEdit";
import WebBanners from "./Pages/WebBanners";
import WebBannersList from "./Pages/WebBannersList";
import WldWelcomeLetter from "./Pages/WldWelcomeLetter";
import WldInventoryDetails from "./Pages/WldInventoryDetails";
import WldAllotmentLetter from "./Pages/WldAllotmentLetter";
import WelcomesPrint from "./Pages/WelcomesPrint";
import ChangeCases from "./Pages/ChangeCases";
import UpdateConstruction from "./Pages/UpdateConstrction";
import UpdateConstrctionList from "./Pages/UpdateConstrctionList";
// import AddOwnership from "./Pages/OwnershipAdd";

import CandidateEdit from "./Pages/CandidateEdit";
import AddStaafff from "./Components/AddStaafff";
import AttendanceList from "./AttendanceList";
import Monthss from "./Pages/Monthss";
import AddNewProject from "./Pages/AddNewProject";
import ListProjects from "./Pages/ListProjects";
import AllCustomer from "./Pages/AllCustomer";
import MontsList from "./Pages/MontsList";
import YearList from "./Pages/YearList";
import ProfileList from "./Pages/ProfileList";
import AddCompany from "./Pages/addCompany";
import CompanyList from "./Pages/CompanyList";
import Inventory from "./Pages/Inventory";
import AddBankAccounts from "./Pages/AddBankAccounts";
import AllCustomersss from "./Pages/AllCustomersss";
import AllotmentLetter from "./Pages/AllotmentLetter";
import AddPaymentss from "./Pages/AddPaymentss";
import CustomerWelcomeLetter from "./Pages/CustomerWelcomeLetter";
import CustomerAllotementLatter from "./Pages/CustomerAllotementLatter";
import CustomersDemandLatters from "./Pages/CustomersDemandLatters";
import AllPaymentLager from "./Pages/AllPaymentLager";
import PaymentRecived from "./Pages/PaymentRecived";
import ShowTargetList from "./Pages/ShowTargetList";
import InventoryCheck from "./Pages/InventoryCheck";
import ApplicantView from "./Pages/ApplicantView";
import InvertyDetaese from "./Pages/InvertyDetaese";
import DemandLetter from "./Pages/DemandLetter";
import StaffPointSheet from "./Pages/StaffPointSheet";
import TaxInvoice from "./Pages/TaxInvoice";
import BankAccountList from "./Pages/BankAccountList";
import WelcomeLetter from "./Pages/WelcomeLetter";
import AddClient from "./Pages/AddClient";
import Gift from "./Pages/Gift";
import ListGift from "./Pages/ListGift";
import Category from "./Pages/Category";
import ListCat from "./Pages/ListCat";
import SubCategory from "./Pages/SubCategory";
import ListSubCat from "./Pages/ListSubCat";
import WirringList from "./Pages/WirringList";
import ViewPlan from "./Pages/ViewPlan";
import AdvisorList from "./Pages/AdvisorList";
import ViewNotifaction from "./Pages/ViewNotifaction";
import PlanEdit from "./Pages/PlanEdit";
import AllAtan from "./Pages/AllAtan";
import ConvertToStaff from "./Pages/ConvertToStaff";
import ApplicantList from "./Pages/ApplicantList";
import AddApplicant from "./Pages/AddApplicant";
import InvenCustomer from "./Pages/InvenCustomer";
import Partner from "./Pages/Partners/index";
import EditPartner from "./Pages/Partners/edit";
import EditPlan from "./Pages/Plans/edit";

import Plan from "./Pages/Plans";
import Master from "./Components/Master";
import AddMaster from "./Components/AddMaster";
import MasterValue from "./Components/MasterValue";
import MasterVal from "./Components/MasterVal";
import NewCom from "./Components/newCom";
import NewLeads from "./Pages/Sales CRM/NewLeads";
import DropdownMenu from "./Components/DropdownMenu";
import Create from "./Pages/From/Create";
import View from "./Pages/From/View";
import AnimatedIcons from "./Components/AnimatedIcons";
import TodoList from "./TodoList";
import Content2 from "./Components/Content2";
import EditMaster from "./Components/EditMaster";
import Content3 from "./Components/Content3";
import AttendanceLogs from "./Pages/Attendance Logs";
import EmployeeReportsList from "./Pages/EmployeeReportsList";
import AllOrders from "./Pages/Orders/AllOrders";
import BuyersList2 from "./Pages/Buyers/BuyersList2";
import ManageMillers from "./Pages/Millers/ManageMillers";
import StaffPointSheetView from "./Pages/StaffPointSheetView";
import ManageExporters from "./Pages/Exporters/ManageExporters";
import ManageVendors from "./Pages/Vendors/ManageVendors";
import VendorsEdit from "./Pages/Vendors/VendorsEdit";
import EditMillers from "./Pages/Millers/EditMillers";
import RefauntAmuount from "./Pages/RefauntAmuount";
import SuccessAmounts from "./Pages/SuccessAmounts";
import PaymentSedu from "./Pages/PaymentSedu";
import AmountsFf from "./Pages/AmountsFf";
import ExportersEdit from "./Pages/Exporters/ExportersEdit";
import AdminList from "./Pages/AdminList";
import AddCondidates from "./Pages/AddCondidates";

import Reports from "./Pages/Sales CRM/Reports";
import HrDashboard from "./Hr View/Pages/HrDashboard";
import He from "./Pages/Sales CRM/page/he";
import AddBuyers from "./Pages/Buyers/AddBuyers/AddBuyers";
import DatelsLeads from "./Pages/Sales CRM/DatelsLeads";
import EditBuyers from "./Pages/Buyers/AddBuyers/EditBuyers";
import AddVendors from "./Pages/Vendors/AddVendors";
import AddExpor2 from "./Pages/Exporters/AddExpor2";
import AddExpor from "./Pages/Exporters/AddExpor";
import AddMillers from "./Pages/Millers/AddMillers";
import NewLeadsTable from "./Pages/Sales CRM/newLeadsTable";
import CustomPlan from "./Pages/Plans/customPlan";
import CustomPlans from "./Pages/Plans/CustomPlans";
import ResetPassword from "./Components/resetPassword";
import ActiveEmployee from "./Pages/ActiveEmployee";
import WelcomeLetterPrint from "./Pages/WelcomeLetterPrint";
import UnitFreeApplicant from "./Pages/UnitFreeApplicant";
import TrackEmployeeAttendance from "./TrackEmployeeAttendance";
import ODSPage from "./Pages/ODS/ODSPage";
import ODSDashboard from "./Pages/ODS/ODSDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/nextPage" element={<NextPage />} />
      <Route path="/Dashboard" element={<Firstpage />} />
      <Route path="/Employee" element={<Employee />} />
      <Route path="/Create/:empid" element={<Create />} />
      <Route path="/View" element={<View />} />
      <Route path="/add-employee" element={<AddCondidate />} />
      <Route path="/add-customer" element={<AddApplicant />} />
      <Route path="/delect-applicant-list" element={<DelectApplicantList />} />
      <Route path="/upload-updated-result" element={<UploadResult />} />
      <Route path="/unit-free-applicants" element={<UnitFreeApplicant />} />
      <Route path="/add-employees" element={<AddStaafff />} />
      <Route path="/staff-employee-list" element={<CondidateList />} />
      <Route path="/target-list/:empid" element={<ShowTargetList />} />
      <Route path="/candidate-employee-list" element={<ConditateEmployee />} />
      <Route path="/employee-edit/:empid" element={<CondidateEdit />} />
      <Route path="/edid-scheme/:empid" element={<EdidScheme />} />
      <Route path="/edit-customer/:empid" element={<EditCustomer />} />
      <Route path="/edit-eoi-customer/:empid" element={<EditEoiCustomer />} />
      <Route path="/candidate-edit/:empid" element={<CandidateEdit />} />
      <Route path="/leadDetails/:empid" element={<LeadDetails />} />
      <Route path="/NewCom/:status" element={<NewCom />} />
      <Route path="/NewLeads/:status" element={<NewLeads />} />
      <Route path="/add-location" element={<AddLocation />} />
      <Route path="/all-payment-ledger" element={<AllPaymentLager />} />
      <Route path="/add-payments" element={<AddPaymentss />} />
      <Route
        path="/customer-cancel-allotments"
        element={<CustomersDemandLatters />}
      />
      <Route
        path="/customer-demand-letter"
        element={<CustomersDemandLatters />}
      />
      <Route
        path="/customer-allotment-letters"
        element={<CustomerAllotementLatter />}
      />
      <Route
        path="/customer-welcome-letter"
        element={<CustomerWelcomeLetter />}
      />
      <Route path="/payment-ledger" element={<PaymentRecived />} />
      <Route
        path="/inventory-check/:empid/:empid2"
        element={<InventoryCheck />}
      />
      <Route path="/Inventory-details/:empid" element={<InvertyDetaese />} />
      <Route path="/allotment-letter/:empid" element={<AllotmentLetter />} />
      <Route path="/demand-letter/:empid" element={<DemandLetter />} />
      <Route path="/tax-invoice" element={<TaxInvoice />} />
      <Route path="/welcome-letter/:empid" element={<WelcomeLetter />} />
      <Route path="/bank-account-list" element={<BankAccountList />} />
      <Route path="/plan-edit" element={<PlanEdit />} />
      <Route path="/list-location" element={<ListLocation />} />
      <Route path="/customer" element={<InvenCustomer />} />
      <Route path="/add-vendor" element={<AddVendor />} />
      <Route path="/list-plan" element={<AllCustomer />} />
      <Route path="/add-staff/:empid" element={<ConvertToStaff />} />
      <Route path="/add-category" element={<Category />} />
      <Route path="/list-category" element={<ListCat />} />
      <Route path="/add-bank-accounts" element={<AddBankAccounts />} />
      <Route path="/advisors-list" element={<AdvisorList />} />
      <Route path="/admin-list" element={<AdminList />} />
      <Route path="/add-candidate" element={<AddCondidates />} />
      <Route path="/add-permissions/:empid/:empid2" element={<Permissions />} />
      <Route path="/add-incentive-plan" element={<IncentivePlan />} />
      <Route path="/incentive-plan-list" element={<IncentivePlanList />} />
      <Route path="/customerReview" element={<CustomerReview />} />
      <Route path="/noc-list" element={<NOCList />} />
      <Route path="/due-payments" element={<DuePayments />} />
      <Route path="/registry" element={<Registry />} />
      <Route path="/owners-listing" element={<OwnersListing />} />
      {/* <Route path="/add-Ownership" element={<AddOwnership />} /> */}
      <Route path="/customer-report" element={<ProjectReports />} />
      <Route path="/scheme-reports" element={<SchemeReports />} />
      <Route path="/staff-reports" element={<StaffReports />} />
      <Route path="/applications-reports" element={<ApplicationsReports />} />
      <Route
        path="/applications-results-reports"
        element={<ApplicationsResults />}
      />
      <Route
        path="/welcome-letter-reports"
        element={<WelcomeLetterReports />}
      />
      <Route
        path="/allocation-letter-reports"
        element={<AllocationLetters />}
      />
      <Route path="/demand-letter-reports" element={<DemandLettersReport />} />
      <Route
        path="/cancelled-allotments-report"
        element={<CancelledAllotmentsReport />}
      />
      <Route path="/draw-refund-reports" element={<DrawRefundReports />} />
      <Route path="/due-payement-reports" element={<DuePayementsReport />} />
      <Route path="/owners-reports" element={<OwnersReports />} />
      <Route path="/noc-reports" element={<NOCReports />} />
      <Route path="/registry-reports" element={<RegistryReports />} />
      <Route path="/payment-reports" element={<PaymentReports />} />
      <Route
        path="/gift-allocation-report"
        element={<GiftAllocationReport />}
      />
      <Route
        path="/welCome-latter-views/:empid"
        element={<WelComeLatterViews />}
      />
      <Route
        path="/unit-allocation-report"
        element={<UnitAllocationReport />}
      />
      <Route path="/inventory-reports" element={<InventoryReport />} />
      <Route path="/sales-leads-report" element={<SalesLeadsReport />} />
      <Route path="/attendance-report" element={<AttendanceReport />} />
      <Route
        path="/manage-gift-allocations"
        element={<CustomerCeacalLatter />}
      />
      <Route path="/unit-allocation" element={<UnitAllocation />} />
      <Route path="/welCome-latter-view" element={<WelComeLatterView />} />
      <Route path="/incentive-pay-out" element={<IncentivePayOut />} />
      <Route path="/change-kyc-request" element={<ChangeKycRequest />} />
      <Route path="/change-unit-request" element={<ChangeUnitRequest />} />
      <Route path="/view-receipt/:empid" element={<ViewRecipts />} />
      <Route path="/view-receipt-eoi/:empid" element={<ViewReciptsEoi />} />
      <Route path="/demand-latter-view/:empid" element={<DemandLatterView />} />

      <Route
        path="/allotment-letter-view/:empid"
        element={<ViewAlltmentLatter />}
      />

      <Route
        path="/remainder-payment-information/:empid"
        element={<PaymentInformation />}
      />
      <Route path="/remainder-plan-change/:empid" element={<PlanChange />} />
      <Route
        path="/remainder-final-payment-intimation/:empid"
        element={<FinalPaymentIntimation />}
      />
      <Route path="/remainder-final-cancel/:empid" element={<FinalCancel />} />
      <Route path="/eoi-list" element={<Eqi />} />
      <Route path="/eoi-letter/:empid" element={<EqiLetter />} />
      <Route
        path="/final-demand-notice/:empid"
        element={<FinalDemandNotice />}
      />
      <Route
        path="/cancellation-notice/:empid"
        element={<CancellationLetter />}
      />
      <Route path="/demand-notice/:empid" element={<DemandNotice />} />
      <Route
        path="/single-payment-entry/:empid"
        element={<SingalPaymentLadger />}
      />
      <Route
        path="/single-payment-ladger/:empid"
        element={<SinglePaymentLadage />}
      />
      <Route path="/payment-recived-eoi" element={<PaymentRecipetEoi />} />
      <Route path="/announcement" element={<Announcement />} />
      <Route path="/announcement-list" element={<AnnouncementList />} />
      <Route path="/inventory-checks" element={<InventoryChecks />} />
      <Route path="/welcome-view/:empid" element={<Welcome />} />
      <Route path="/duplicate-plan/:empid" element={<EditPlals />} />
      <Route path="/staff-edit/:empid" element={<EmployeeEdit />} />
      <Route path="/add-lucky-draw" element={<LuckyDraw />} />
      <Route path="/lucky-draw-list" element={<LuckyDrawList />} />
      <Route path="/active-employee-list" element={<ActiveEmployee />} />
      <Route path="/inactive-employee-list" element={<InActiveEmployee />} />
      <Route path="/allocated-list" element={<AllocatedList />} />
      <Route path="/ownership-list" element={<OwnershipList />} />
      <Route path="/not-allocated-list" element={<NotAllocatedList />} />
      <Route path="/new-lead-list" element={<NewLead />} />
      <Route path="/all-payment-remainder" element={<AllPaymentRemainder />} />
      <Route path="/all-notice-list" element={<AllNoticeList />} />
      <Route path="/not-enquired" element={<NotEnquired />} />
      <Route path="/not-interested" element={<NotInterested />} />
      <Route path="/not-connected" element={<NotConnected />} />
      <Route path="/hot-lead" element={<HotLead />} />
      <Route path="/meeting-done" element={<MeetingDone />} />
      <Route path="/form-done" element={<FormDone />} />
      <Route path="/follow-up" element={<FolloUpDone />} />
      <Route path="/sales-projection" element={<SalesProjection />} />
      <Route path="/outstation" element={<Outstation />} />
      <Route path="/search" element={<Search />} />
      <Route path="/dead-other-issue" element={<DeadOtherIssue />} />
      <Route path="/payment-receiveds" element={<PaymentReceived />} />
      <Route path="/payment-received" element={<PaymentReceiveds />} />
      <Route path="/dead-budget-issue" element={<DeadBudgetIssue />} />
      <Route
        path="/create-plan/:empid1/:empid2/:empid3/:empid4"
        element={<CreatePlan />}
      />
      <Route path="/plan-views/:empid" element={<PlanView />} />
      <Route path="/edit-lucky-draw/:empid" element={<EditLuckeyDraw />} />
      <Route path="/lead-download-list" element={<LeadDownloadList />} />
      <Route
        path="/refund-request-pending"
        element={<RefundRequestPending />}
      />
      <Route path="/old-plan/:empid" element={<OldPlan />} />
      <Route path="/new-plan/:empid" element={<NewPlan />} />
      <Route path="/document-list/:empid" element={<DocumentList />} />
      <Route path="/user-list" element={<UserApplicant />} />
      <Route
        path="/user-new-sign-up-opt-list"
        element={<UserSignUpOtpList />}
      />
      <Route path="/applicant/:empid" element={<Applicant />} />
      <Route path="/not-allocated/:empid" element={<NotAllocated />} />
      <Route path="/crm-project-list" element={<CrmProjectList />} />
      <Route path="/add-crm-project" element={<AddCrmProject />} />
      <Route path="/sale-leads/:statuss" element={<AllSelsLeads />} />
      <Route path="/sales-staff" element={<SalesStaff />} />
      <Route path="/lead-allocation" element={<SalesDashboard />} />
      <Route path="/lead-generation" element={<LeadGeneration />} />
      <Route path="/lead-data-bank-list" element={<DataBank />} />
      <Route path="/staff-leave-attendance" element={<AttendanceListss />} />
      <Route path="/team-manager" element={<TeamManager />} />
      <Route path="/add-salary-sheet/:empid" element={<SalarySheet />} />
      <Route path="/salary-sheet-list" element={<SalarySheetList />} />
      <Route path="/salary-slip-view/:empid" element={<SalarySlip />} />
      <Route path="/lead-dashboard" element={<LeadDashboardS />} />
      <Route path="/salary-generate/:empid" element={<SalaryGenerate />} />
      <Route path="/vendor-payout" element={<LeadReport />} />
      <Route path="/team-report" element={<TeamReport />} />
      <Route path="/edit-team-manager/:empid" element={<EditTeamManager />} />
      <Route path="*" element={<DefaultPage />} />
      <Route path="/manage-eoi" element={<ManageEoi />} />
      <Route path="/add-eoi-project" element={<AddEoiProject />} />
      <Route path="/inventory-view" element={<EoiInventory />} />
      <Route path="/applicant-verified" element={<ApplicantVerified />} />
      <Route path="/approved-applicant" element={<ApplicantApproved />} />
      <Route path="/unit-allocation" element={<UnitAllocationApplicant />} />
      <Route path="/add-eoi-plan/:empid" element={<AddEoiPlan />} />
      <Route path="/eoi-plan-list" element={<EoiPlanList />} />
      <Route
        path="/eoi-inventory-list/:empid/:empid4"
        element={<EoiInventoryList />}
      />
      <Route path="/project-plan-view/:empid" element={<ProjectPlanView />} />
      <Route path="/eoi-details/:empid" element={<EoiDetails />} />
      <Route
        path="/eoi-single-payment-entry/:empid"
        element={<EoiSinglePaymentEntry />}
      />
      <Route
        path="/eoi-single-payment-ladger/:empid"
        element={<EoiSinglePaymentLadger />}
      />
      <Route
        path="/eoi-allotment-letter/:empid"
        element={<EoiAllotmentLetter />}
      />
      <Route path="/eoi-project-edit/:empid" element={<EoiProjectEdit />} />
      <Route path="/refund-request-list" element={<RefundRequest />} />

      <Route path="/duplicate-plan-eoi/:empid" element={<DuplicatePlanEoi />} />

      <Route path="/eoi-welcome-letter/:empid" element={<EOIWelcomeLetter />} />
      <Route
        path="/welcome-letter-print/:empid"
        element={<WelcomeLetterPrint />}
      />
      <Route
        path="/allotment-letter-prints/:empid"
        element={<AllotmentLetterPrint />}
      />
      <Route path="/not-eoi-application" element={<NotEoiApplication />} />
      <Route
        path="/not-approved-eoi-application"
        element={<NotEoiApplications />}
      />
      <Route
        path="/eoi-inventory-lists/:empid"
        element={<EoiInventoryListss />}
      />
      <Route
        path="/eoi-demand-letter/:empid/:empid1"
        element={<EoiDemandLatter />}
      />
      <Route
        path="/eoi-demand-letter-print/:empid/:empid1"
        element={<EoiDemandLatterPrint />}
      />

      <Route path="/finance-dashboard" element={<ReportOne />} />

      <Route path="/sales-dashboard" element={<SalesDashboardss />} />
      <Route path="/ods-dashboard" element={<ODSDashboard />} />

      <Route path="/inventory-dashboard" element={<InventoryDashboard />} />
      <Route path="/notificatio-list" element={<NotificatioList />} />
      <Route path="/pricing-list" element={<PricingList />} />

      <Route path="/gallery-list" element={<GalleryList />} />
      <Route path="/file-manager-list" element={<FileManager />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route
        path="/project-inventorys/:empid7"
        element={<ProjectInventorys />}
      />

      <Route
        path="/send-welCome-latter/:empid"
        element={<LetterApplicants />}
      />
      <Route path="/ldub-not-allocated" element={<LdubNotAllocated />} />
      <Route path="/wld-application" element={<LdubsApplication />} />
      <Route path="/wld-add-applicant" element={<WldApplicant />} />
      <Route path="/inventorys-check/:empid" element={<LuckyDrawInventory />} />
      <Route path="/under-taking/:empid" element={<UndertakingForm />} />
      <Route path="/approved-application" element={<ApprovedApplication />} />
      <Route path="/junk-application" element={<JunkApplication />} />
      <Route
        path="/un-approved-application"
        element={<UnApprovedApplication />}
      />

      <Route path="/views-welcome-letters/:empid" element={<WelComelatter />} />
      <Route
        path="/wld-approved-application"
        element={<LdApprovedApplication />}
      />
      <Route path="/wld-customer" element={<WldCustomer />} />
      <Route path="/wld-junk-application" element={<WldJunk />} />
      <Route path="/contact-enquiries" element={<ContactEnquiries />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/faq" element={<Faq />} />

      <Route
        path="/single-payments-entry/:empid"
        element={<AddBookingAmount />}
      />

      <Route
        path="/inventory-check-list/:empid/:empid2"
        element={<InventoryCheckData />}
      />

      <Route
        path="/sends-welComes-latters/:empid"
        element={<SendwelcomeData />}
      />

      <Route path="/cheque-ledger" element={<ChequeLedger />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/blog-list" element={<BlogList />} />
      <Route path="/edit-blog/:empid" element={<EditBlog />} />
      <Route path="/testimonia-list" element={<TestimonialList />} />
      <Route path="/testimonia-edit/:empid" element={<TestimonialEdit />} />
      <Route path="/add-media" element={<AddMedia />} />

      {/* Accounts */}
      <Route path="/ods-page" element={<ODSPage />} />
      {/* Accounts */}

      <Route path="/media-list" element={<MediaList />} />
      <Route path="/media-edit/:empid" element={<MediaEdit />} />
      <Route path="/faq-list" element={<FaqList />} />
      <Route path="/faq-edit/:empid" element={<FaqEdit />} />
      <Route path="/add-web-banner" element={<WebBanners />} />
      <Route path="/web-banner-list" element={<WebBannersList />} />
      <Route path="/wld-welcome-letter/:empid" element={<WldWelcomeLetter />} />
      <Route
        path="/wld-inventory-details/:empid"
        element={<WldInventoryDetails />}
      />
      <Route
        path="/wld-allotment-letter/:empid"
        element={<WldAllotmentLetter />}
      />
      <Route path="/welcomes-print/:empid" element={<WelcomesPrint />} />

      <Route path="/case-change" element={<ChangeCases />} />

      <Route path="/all-customers" element={<AllCustomersss />} />
      <Route path="/refund-booking-amt" element={<RefauntAmuount />} />
      <Route path="/add-sub-category" element={<SubCategory />} />
      <Route path="/list-sub-category" element={<ListSubCat />} />
      <Route path="/staff-point-sheet-view" element={<StaffPointSheetView />} />
      <Route path="/staff-point-sheet" element={<StaffPointSheet />} />
      <Route path="/winners-list" element={<WirringList />} />
      <Route path="/all-notification" element={<ViewNotifaction />} />
      <Route path="/add-gift" element={<Gift />} />
      <Route path="/list-gift" element={<ListGift />} />
      <Route path="/vendor-list" element={<VendorList />} />
      <Route path="/inventory-view" element={<Inventory />} />
      <Route path="/inventory-views" element={<ApplicantView />} />
      <Route path="/applicant-list" element={<ApplicantLists />} />
      <Route path="/location-edit/:empid" element={<LocationEdit />} />
      <Route path="/project-edit/:empid" element={<ProjectEdit />} />
      <Route path="/add-new-project" element={<AddNewProject />} />
      <Route path="/add-plan" element={<AddClient />} />
      <Route path="/view-plan/:empid" element={<ViewPlan />} />
      <Route path="/monts-list/:empid" element={<MontsList />} />
      <Route
        path="/attendance-list/:empid1/:empid2/:empid3"
        element={<AllAtan />}
      />
      <Route path="/month-list/:empid" element={<Monthss />} />
      <Route path="/year-list/:empid" element={<YearList />} />
      <Route path="/profile-list" element={<ProfileList />} />
      <Route path="/sales-leads-list" element={<SalesLeads />} />
      <Route path="/list-projects" element={<ListProjects />} />
      <Route
        path="/refund-booking-amount-success"
        element={<SuccessAmounts />}
      />
      <Route path="/refund-booking-amount-ff" element={<AmountsFf />} />
      <Route
        path="/customer-payment-schedule/:empid/:empid2"
        element={<PaymentSedu />}
      />
      <Route path="/add-scheme" element={<AddScheme />} />
      <Route path="/list-scheme" element={<ListScheme />} />
      <Route path="/add-sales-lead" element={<AddSalesLead />} />
      <Route path="/sales-lead" element={<SalesLead />} />
      <Route path="/Customer-list" element={<ApplicantList />} />
      <Route path="/edit-lead/:empid" element={<EditLeads />} />
      <Route path="/edit-company/:empid" element={<EditCompany />} />
      <Route path="/edit-vendor/:empid" element={<VendorEdits />} />
      <Route path="/company-list" element={<CompanyList />} />
      <Route path="/inactive-list" element={<Inactive />} />
      <Route path="/attendance-list" element={<AttendanceList />} />
      <Route
        path="/track-employee-attandance"
        element={<TrackEmployeeAttendance />}
      />
      <Route path="/add-company" element={<AddCompany />} />
      <Route path="/master-list" element={<Master />} />
      <Route path="/MasterValue" element={<MasterValue />} />
      <Route path="/master-value-list" element={<MasterVal />} />
      <Route path="/AddMaster" element={<AddMaster />} />
      <Route path="/dropdown" element={<DropdownMenu />} />
      <Route path="/icons" element={<AnimatedIcons />} />
      <Route path="/todos" element={<TodoList />} />
      <Route path="/Content2/:empid" element={<Content2 />} />
      <Route path="/EditMaster/:empid" element={<EditMaster />} />
      <Route path="/Content3/:empid" element={<Content3 />} />
      <Route path="/DatelsLeads/:empid" element={<DatelsLeads />} />
      <Route path="/EditMillers/:empid" element={<EditMillers />} />
      <Route path="/VendorsEdit/:empid" element={<VendorsEdit />} />
      <Route path="/ExportersEdit/:empid" element={<ExportersEdit />} />
      <Route path="/AttendanceLogs" element={<AttendanceLogs />} />
      <Route path="/EmployeeReportsList" element={<EmployeeReportsList />} />
      <Route path="/AllOrders" element={<AllOrders />} />

      <Route path="/BuyersList2" element={<BuyersList2 />} />

      <Route path="/ManageMillers" element={<ManageMillers />} />
      <Route path="/ManageExporters" element={<ManageExporters />} />
      <Route path="/ManageVendors" element={<ManageVendors />} />
      <Route path="/NewLeads/:status" element={<NewLeadsTable />} />
      <Route path="/leads/:status" element={<NewLeadsTable />} />
      <Route path="/partners" element={<Partner />} />
      <Route path="/partner/:id" element={<EditPartner />} />
      <Route path="/plans" element={<Plan />} />
      <Route path="/plans/:id" element={<EditPlan />} />
      <Route path="/customPlan/:id" element={<CustomPlan />} />
      <Route path="/custom-plans" element={<CustomPlans />} />
      <Route path="/Reports" element={<Reports />} />
      <Route path="/HrDashboard" element={<HrDashboard />} />
      <Route path="/he" element={<He />} />
      <Route path="/AddBuyers" element={<AddBuyers />} />
      <Route path="/EditBuyers/:empid " element={<EditBuyers />} />
      <Route path="/AddVendors" element={<AddVendors />} />
      <Route path="/AddExpor2" element={<AddExpor2 />} />
      <Route path="/AddExpor" element={<AddExpor />} />
      <Route path="/AddMillers " element={<AddMillers />} />
      <Route
        path="/updateConstruction/:projectId"
        element={<UpdateConstruction />}
      />
      <Route
        path="/construction-list/:projectId"
        element={<UpdateConstrctionList />}
      />
    </Routes>
  );
}

export default App;
