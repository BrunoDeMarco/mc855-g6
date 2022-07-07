import React, { useState } from "react";

import { createContext } from "react";

interface FormValues {
  senha: string;
  hc: string;
  atendimento: string;
  especialidade: string;
}

interface FormContextProps {
  values: FormValues;
  setSenha: (senha: string) => void;
  setHc: (hc: string) => void;
  setAtendimento: (atendimento: string) => void;
  setEspecialidade: (especialidade: string) => void;
}

const DEFAULT_VALUE: FormContextProps = {
  values: { senha: "", hc: "", atendimento: "", especialidade: "" },
  setSenha: () => {},
  setHc: () => {},
  setAtendimento: () => {},
  setEspecialidade: () => {},
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

  return (
    <FormContext.Provider
      value={{
        values: formValues,
        setSenha,
        setHc,
        setAtendimento,
        setEspecialidade,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContextProvider };
export default FormContext;
