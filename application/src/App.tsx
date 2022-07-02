import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { AdministrativeAttendanceInfo } from "./AdministrativeAttendanceInfo/AdministrativeAttendanceInfo";
import { AttendanceTypeSelection } from "./AttendanceTypeSelection/AttendanceTypeSelection";
import { Header } from "./components/Header/Header";
import { FirstTimeInfo } from "./FirstTimeInfo/FirstTimeInfo";
import { FitInInfo } from "./FitInInfo/FitInInfo";
import GlobalStyle from "./globalStyles";
import { HCNumberInput } from "./HCNumberInput/HCNumberInput";
import { Home } from "./Home/Home";
import { NotScheduledExpertiseSelection } from "./NotScheduledExpertiseSelection/NotScheduledExpertiseSelection";
import { OtherExpertiseInfo } from "./OtherExpertiseInfo/OtherExpertiseInfo";
import { PatientTypeSelection } from "./PatientTypeSelection/PatientTypeSelection";
import { PossiblyInfo } from "./PossiblyInfo/PossiblyInfo";
import { RecurringConsultationExpertiseSelection } from "./RecurringConsultationExpertiseSelection/RecurringConsultationExpertiseSelection";
import { ScheduledInfo } from "./ScheduledInfo/ScheduledInfo";
import { ScheduleTypeSelection } from "./ScheduleTypeSelection/ScheduleTypeSelection";
import { WrongPlaceInfo } from "./WrongPlaceInfo/WrongPlaceInfo";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/administrative-attendance-info"
            element={<AdministrativeAttendanceInfo />}
          />
          <Route
            path="/attendance-type-selection"
            element={<AttendanceTypeSelection />}
          />
          <Route path="/first-time-info" element={<FirstTimeInfo />} />
          <Route path="/fit-in-info" element={<FitInInfo />} />
          <Route path="/hc-number-input" element={<HCNumberInput />} />
          <Route
            path="/not-scheduled-expertise-selection"
            element={<NotScheduledExpertiseSelection />}
          />
          <Route
            path="/other-expertise-info"
            element={<OtherExpertiseInfo />}
          />
          <Route
            path="/patient-type-selection"
            element={<PatientTypeSelection />}
          />
          <Route path="/possibly-info" element={<PossiblyInfo />} />
          <Route
            path="/recurring-consultation-expertise-selection"
            element={<RecurringConsultationExpertiseSelection />}
          />
          <Route path="/scheduled-info" element={<ScheduledInfo />} />
          <Route
            path="/schedule-type-selection"
            element={<ScheduleTypeSelection />}
          />
          <Route path="/wrong-place-info" element={<WrongPlaceInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
