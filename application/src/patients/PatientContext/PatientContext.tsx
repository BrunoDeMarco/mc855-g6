import React from 'react';

import { FormContextProvider } from '../FormContextProvider/FormContextProvider';

interface IPatientContextProps {
  children?: React.ReactNode;
}

export const PatientContext: React.FC<IPatientContextProps> = ({
  children,
}) => {
  return (
    <FormContextProvider>
      {children}
    </FormContextProvider>
  );
};