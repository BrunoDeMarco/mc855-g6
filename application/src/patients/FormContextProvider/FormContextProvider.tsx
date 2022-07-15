import React, { useState } from "react";

import { createContext } from "react";
import { MedicalSpeciality, PatientAttendanceType } from "../helpers/form";

export interface FormValues {
  senha: number;
  hc?: string;
  atendimento: PatientAttendanceType;
  especialidade?: MedicalSpeciality;
  encaixe?: boolean;
}

interface FormContextProps {
  values: FormValues;
  setSenha: (senha: string) => void;
  setHc: (hc: string) => void;
  setAtendimento: (atendimento: PatientAttendanceType) => void;
  setEspecialidade: (especialidade: MedicalSpeciality) => void;
  setEncaixe: (encaixe: boolean) => void;
  resetFormValues: () => void;
}

const DEFAULT_VALUE: FormContextProps = {
  values: {
    senha: 0,
    atendimento: PatientAttendanceType.appointment,
  },
  setSenha: () => console.log("setSenha not set."),
  setHc: () => console.log("setHc not set."),
  setAtendimento: () => console.log("setAtendimento not set."),
  setEspecialidade: () => console.log("setEspecialidade not set."),
  setEncaixe: () => console.log("setEncaixe not set."),
  resetFormValues: () => console.log("resetFormValues not set."),
};

const FormContext = createContext<FormContextProps>(DEFAULT_VALUE);

const FormContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [formValues, setFormValues] = useState<FormValues>(
    DEFAULT_VALUE.values
  );

  const setSenha = (senha: string) =>
    setFormValues({ ...formValues, senha: +senha });
  const setHc = (hc: string) => setFormValues({ ...formValues, hc });
  const setAtendimento = (atendimento: PatientAttendanceType) =>
    setFormValues({ ...formValues, atendimento });
  const setEspecialidade = (especialidade: MedicalSpeciality) =>
    setFormValues({ ...formValues, especialidade });
  const setEncaixe = (encaixe: boolean) =>
    setFormValues({ ...formValues, encaixe });
  const resetFormValues = () => {
    setFormValues({
      senha: DEFAULT_VALUE.values.senha,
      atendimento: DEFAULT_VALUE.values.atendimento,
    });
  };

  return (
    <FormContext.Provider
      value={{
        values: formValues,
        setSenha,
        setHc,
        setAtendimento,
        setEspecialidade,
        setEncaixe,
        resetFormValues,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContextProvider };
export default FormContext;
