import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PatientContext } from "./patients/PatientContext/PatientContext";
import { AdministrativeAttendanceInfo } from "./patients/AdministrativeAttendanceInfo/AdministrativeAttendanceInfo";
import { AttendanceTypeSelection } from "./patients/AttendanceTypeSelection/AttendanceTypeSelection";
import { FirstTimeInfo } from "./patients/FirstTimeInfo/FirstTimeInfo";
import { FitInInfo } from "./patients/FitInInfo/FitInInfo";
import { HCNumberInput } from "./patients/HCNumberInput/HCNumberInput";
import { Home } from "./patients/Home/Home";
import { NotScheduledExpertiseSelection } from "./patients/NotScheduledExpertiseSelection/NotScheduledExpertiseSelection";
import { OtherExpertiseInfo } from "./patients/OtherExpertiseInfo/OtherExpertiseInfo";
import { PatientTypeSelection } from "./patients/PatientTypeSelection/PatientTypeSelection";
import { PossiblyInfo } from "./patients/PossiblyInfo/PossiblyInfo";
import { RecurringConsultationExpertiseSelection } from "./patients/RecurringConsultationExpertiseSelection/RecurringConsultationExpertiseSelection";
import { ScheduledInfo } from "./patients/ScheduledInfo/ScheduledInfo";
import { ScheduleTypeSelection } from "./patients/ScheduleTypeSelection/ScheduleTypeSelection";
import { WrongPlaceInfo } from "./patients/WrongPlaceInfo/WrongPlaceInfo";
import { HospitalContext } from "./hospital/HospitalContext/HospitalContext";
import { Login } from "./hospital/Login/Login"
import { Dashboard } from "./hospital/Dashboard/Dashboard";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Patient routes */}
          <Route
            path="/"
            element={
              <PatientContext>
                <Home />
              </PatientContext>
            }
          />
          <Route
            path="/administrative-attendance-info"
            element={
              <PatientContext>
                <AdministrativeAttendanceInfo />
              </PatientContext>
            }
          />
          <Route
            path="/attendance-type-selection"
            element={
              <PatientContext>
                <AttendanceTypeSelection />
              </PatientContext>
            }
          />
          <Route
            path="/first-time-info"
            element={
              <PatientContext>
                <FirstTimeInfo />
              </PatientContext>
            }
          />
          <Route
            path="/fit-in-info"
            element={
              <PatientContext>
                <FitInInfo />
              </PatientContext>
            }
          />
          <Route
            path="/hc-number-input"
            element={
              <PatientContext>
                <HCNumberInput />
              </PatientContext>
            }
          />
          <Route
            path="/not-scheduled-expertise-selection"
            element={
              <PatientContext>
                <NotScheduledExpertiseSelection />
              </PatientContext>
            }
          />
          <Route
            path="/other-expertise-info"
            element={
              <PatientContext>
                <OtherExpertiseInfo />
              </PatientContext>
            }
          />
          <Route
            path="/patient-type-selection"
            element={
              <PatientContext>
                <PatientTypeSelection />
              </PatientContext>
            }
          />
          <Route
            path="/possibly-info"
            element={
              <PatientContext>
                <PossiblyInfo />
              </PatientContext>
            }
          />
          <Route
            path="/recurring-consultation-expertise-selection"
            element={
              <PatientContext>
                <RecurringConsultationExpertiseSelection />
              </PatientContext>
            }
          />
          <Route
            path="/scheduled-info"
            element={
              <PatientContext>
                <ScheduledInfo />
              </PatientContext>
            }
          />
          <Route
            path="/schedule-type-selection"
            element={
              <PatientContext>
                <ScheduleTypeSelection />
              </PatientContext>
            }
          />
          <Route
            path="/wrong-place-info"
            element={
              <PatientContext>
                <WrongPlaceInfo />
              </PatientContext>
            }
          />

          {/* Hospital team routes */}
          <Route path="/login" element={<HospitalContext><Login /></HospitalContext>} />
          <Route path="/dashboard" element={<HospitalContext><Dashboard /></HospitalContext>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
