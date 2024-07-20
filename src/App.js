import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Pages/login';
import RegistrationForm from './Pages/register';
import MainDashboard from './Pages/dashboard';
import ForgetPassword from './Pages/forgetpassword';
import RequestForm from './Pages/RequestForm';
import RequestList from './Pages/RequestList';
import Sidenav from './Components/Sidenav';
import Header from './Components/Header';
import AdminDashboard from './Pages/deandashboad';
import DeanSidenav from './Components/Deansidnav';
import DeanReviewRequests from './Pages/Deanrequestreview';
import AdminSidenav from './Components/Adminsidnav';
import ManageUsers from './Pages/Manageusers';
import ManageAppointments from './Pages/Manageappointment';
import ManageRequests from './Pages/Managerequests';
import DeanAppointmentList from './Pages/DeanAppointmentList';
import IncomingAppointment from './Pages/IncomingAppointment';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/dashboard" element={<DashboardWithHeaderAndSidenav />} />
        <Route path="/send-request" element={<RequestWithHeaderAndSidenav />} />
        <Route path="/view-requests" element={<RequestListWithHeaderAndSidenav />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/deandashboard" element={<DeanDashboardFull />} />
        <Route path="/view-appointment" element={<DeanAppointmentListFull />} />
        <Route path="/Deanrequestreview" element={<DeanReviewRequests />} />
        <Route path="/deanreviewrequests" element={<DeanReviewRequestsFull />} />
        <Route path="/Admindashboard" element={<AdminDashboardFull />} />
        <Route path="/manageusers" element={<AdminManageUsers />} />
        <Route path="/manageappointment" element={<AdminManageAppointment />} />
        <Route path="/managerequests" element={<AdminManageRequests />} />
        <Route path="/incoming-appointment" element={<FullIncomingAppointment />} />
        

        

        
      </Routes>
    </Router>
  );
}

const DashboardWithHeaderAndSidenav = () => (
  <div className="app-container">
    <Header />
    <div className="main-content">
      <Sidenav />
      <MainDashboard />
    </div>
  </div>
);

const RequestWithHeaderAndSidenav = () => (
  <div className="app-container">
    <Header />
    <div className="main-content">
      <Sidenav />
      <RequestForm />
    </div>
  </div>
);

const RequestListWithHeaderAndSidenav = () => (
  <div className="app-container">
    <Header />
    <div className="main-content">
      <Sidenav />
      <RequestList />
    </div>
  </div>
);
const FullIncomingAppointment = () => (
  <div className="app-container">
    <Header />
    <div className="main-content">
      <Sidenav />
      <IncomingAppointment/>
    </div>
  </div>
);


const DeanDashboardFull = () => (
  <div className="app-container">
    <Header />
    <div className='main-content'>
      <DeanSidenav />
      <AdminDashboard />
    </div>
  </div>
);


const DeanAppointmentListFull = () => (
  <div className='app-container'>
    <Header />
    <div className='main-content'>
      <DeanSidenav />
      <DeanAppointmentList />
    </div>
  </div>
);

const DeanReviewRequestsFull = () => (
  <div className='app-container'>
    <Header />
    <div className='main-content'>
      <DeanSidenav />
      <DeanReviewRequests />
    </div>
  </div>
);

const AdminDashboardFull =() =>(
  <div className='app-container'>
    <Header/>
    <div className='main-content'>
      <AdminSidenav/>
      <AdminDashboard/>
    </div>
  </div>
);

const AdminManageUsers =() =>(
  <div className='app-container'>
    <Header/>
    <div className='main-content'>
      <AdminSidenav/>
      <ManageUsers/>
    </div>
  </div>
);

const AdminManageAppointment =() =>(
  <div className='app-container'>
    <Header/>
    <div className='main-content'>
      <AdminSidenav/>
      <ManageAppointments/>
    </div>
  </div>
);

const AdminManageRequests = () => (
  <div className='app-container'>
    <Header />
    <div className='main-content'>
      <AdminSidenav />
      <ManageRequests />
    </div>
  </div>
);

export default App;
