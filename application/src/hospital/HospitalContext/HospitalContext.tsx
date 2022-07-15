import React from 'react';

import { SessionContextProvider } from "../SessionContextProvider/SessionContextProvider";

interface IHospitalContextProps {
  children?: React.ReactNode;
}

export const HospitalContext: React.FC<IHospitalContextProps> = ({
  children,
}) => {
  return (
    <SessionContextProvider>
      {children}
    </SessionContextProvider>
  );
};