import React, { useState } from "react";

import { createContext } from "react";

export interface FormValues {
  senha: string;
  hc: string;
  atendimento: string;
  especialidade: string;
  encaixe: boolean;
}

interface FormContextProps {
  values: FormValues;
  setSenha: (senha: string) => void;
  setHc: (hc: string) => void;
  setAtendimento: (atendimento: string) => void;
  setEspecialidade: (especialidade: string) => void;
  setEncaixe: (encaixe: boolean) => void;
}

const DEFAULT_VALUE: FormContextProps = {
  values: {
    senha: "",
    hc: "",
    atendimento: "",
    especialidade: "",
    encaixe: false,
  },
  setSenha: () => console.log("setSenha not set."),
  setHc: () => console.log("setHc not set."),
  setAtendimento: () => console.log("setAtendimento not set."),
  setEspecialidade: () => console.log("setEspecialidade not set."),
  setEncaixe: () => console.log("setEncaixe not set."),
};

const FormContext = createContext<FormContextProps>(DEFAULT_VALUE);

const FormContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [formValues, setFormValues] = useState<FormValues>(
    DEFAULT_VALUE.values
  );

  const setSenha = (senha: string) => setFormValues({ ...formValues, senha });
  const setHc = (hc: string) => setFormValues({ ...formValues, hc });
  const setAtendimento = (atendimento: string) =>
    setFormValues({ ...formValues, atendimento });
  const setEspecialidade = (especialidade: string) =>
    setFormValues({ ...formValues, especialidade });
  const setEncaixe = (encaixe: boolean) =>
    setFormValues({ ...formValues, encaixe });

  return (
    <FormContext.Provider
      value={{
        values: formValues,
        setSenha,
        setHc,
        setAtendimento,
        setEspecialidade,
        setEncaixe,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContextProvider };
export default FormContext;
