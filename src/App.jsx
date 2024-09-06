import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateDepartment from "./staffpages/CreateDepartment";
import CreateProgram from "./staffpages/CreateProgram";
import CreateStudent from "./staffpages/CreateStudentAccount";
import CreateUserRoleAccount from "./staffpages/CreateUserRoleAccount";
import Dashboard from "./staffpages/Dashboard";
import DoctorAccounts from "./staffpages/DoctorAccounts";
import NurseAccounts from "./staffpages/NurseAccounts";
import StaffAccounts from "./staffpages/StaffAccounts";
import StudentsAccounts from "./staffpages/StudentsAccounts";
import LoginStaff from './login/LoginStaff';
import ForgotPassword from './login/ForgotPassword';
import LoginStudent from './login/LoginStudent';
import LoginNurse from './login/LoginNurse';
import LoginAdmin from './login/LoginAdmin';
import LoginDoctor from './login/LoginDoctor';
import Archive from './staffpages/Archive';
import Home from './userpages/home';
import AboutUs from './userpages/aboutus';
import Services from './userpages/services';
import StudentCalendar from './userpages/calendar'
import Docinfo from "./pages/docinfo";
import Nurseinfo from "./pages/nurseinfo";
import Staffinfo from "./pages/staffinfo";
import Studinfo from "./pages/studinfo";
import RgstrForCheckup from "./pages/RegisterForCheckup";
import ChckupForm from "./pages/CheckupForm";
import CheckupApplicantList from "./pages/CheckupApplicantList";
import StudentMedicalHistory from "./pages/StudentMedicalHistory";
import MedicalHistoryProvider from "./pages/MedicalHistoryProvider";
import AfterLogin from "./pages/AfterLogin";
import StudentMedicalRecords from "./pages/StudentMedicalRecords";
import NurseSchedule from "./pages/NurseSchedule";
import CalendarSchedule from "./pages/CalendarSchedule";
import StaffArchive from './staffpages/StaffArchive';
import NurseArchive from './staffpages/NurseArchive';
import Contact from './userpages/contact';

export default function App() {
  return (
   <div>
    <BrowserRouter>
      <MedicalHistoryProvider>
      <Routes>
        <Route path="/" exact element={<LoginAdmin />}></Route>
        <Route path="/dashboard" exact element={<Dashboard />}></Route>
        <Route path="/student-accounts" exact element={<StudentsAccounts />}></Route>
        <Route path="/staff-accounts" exact element={<StaffAccounts />}></Route>
        <Route path="/nurse-accounts" exact element={<NurseAccounts />}></Route>
        <Route path="/doctor-accounts" exact element={<DoctorAccounts />}></Route>
        <Route path="/archived-student-accounts" exact element={<Archive />}></Route>
        <Route path="/archived-staff-accounts" exact element={<StaffArchive />}></Route>
        <Route path="/archived-nurse-accounts" exact element={<NurseArchive />}></Route>
        <Route path="/create-account" exact element={<CreateUserRoleAccount/>}></Route>
        <Route path="/create-student-account" exact element={<CreateStudent />}></Route>
        <Route path="/create-department" exact element={<CreateDepartment />}></Route>
        <Route path="/create-program" exact element={<CreateProgram />}></Route>
        <Route path="/login-staff" exact element={<LoginStaff />}></Route>
        <Route path="/login-student" exact element={<LoginStudent />}></Route>
        <Route path="/login-staff" exact element={<LoginStaff />}></Route>
        <Route path="/login-nurse" exact element={<LoginNurse />}></Route>
        <Route path="/login-admin" exact element={<LoginAdmin />}></Route>
        <Route path="/login-doctor" exact element={<LoginDoctor />}></Route>
        <Route path="/change-password" exact element={<ForgotPassword />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/aboutus" exact element={<AboutUs />}></Route>
        <Route path="/services" exact element={<Services />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
        <Route path="/student-calendar" exact element={<StudentCalendar />}></Route>
        <Route path="/home-personnel" exact element={<AfterLogin />}></Route>
        <Route path="/studinfo" exact element={<Studinfo />}></Route>
        <Route path="/nurseinfo" exact element={<Nurseinfo />} />
        <Route path="/docinfo" exact element={<Docinfo />} />
        <Route path="/staffinfo" exact element={<Staffinfo />} />
        <Route path="/RegisterForCheckup" exact element={<RgstrForCheckup />} />
        <Route path="/CheckupForm/:id" exact element={<ChckupForm />} />
        <Route path="/CheckupApplicantList" exact element={<CheckupApplicantList />} />
        <Route path="/StudentMedicalHistory" exact element={<StudentMedicalHistory />} />
        <Route path="/AfterLogin" exact element={<AfterLogin />} />
        <Route path="/StudentMedicalRecords" exact element={<StudentMedicalRecords />} />
        <Route path="/NurseSchedule" exact element={<NurseSchedule />} />
        <Route path="/CalendarSchedule" exact element={<CalendarSchedule />} />
      </Routes>
      </MedicalHistoryProvider>
    </BrowserRouter>
   </div>
  )
} 