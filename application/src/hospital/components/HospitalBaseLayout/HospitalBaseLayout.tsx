import React from "react";

import { Box } from "@mui/material";
import GlobalHospitalStyle from "../../globalHospitalStyle";
import { HospitalHeader } from "../HospitalHeader/HospitalHeader";

interface IHospitalBaseLayoutProps {
  children?: React.ReactNode;
}

export const HospitalBaseLayout: React.FC<IHospitalBaseLayoutProps> = ({ children }) => {
  return (
    <div>
      <GlobalHospitalStyle />
      <HospitalHeader />
      <Box component="main" sx={{ p: 8, mt: 2 }}>
        {children}
      </Box>
    </div>
  );
};