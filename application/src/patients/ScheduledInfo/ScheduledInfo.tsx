import React, { useContext, useEffect } from "react";
import { PatientBaseLayout } from "../components/PatientBaseLayout/PatientBaseLayout";
import { Box } from "../components/Box/Box";
import FormContext from "../FormContextProvider/FormContextProvider";
import { submitForm } from "../helpers/form";

export const ScheduledInfo: React.FC = () => {
  const { values, resetFormValues } = useContext(FormContext);

  useEffect(() => {
    submitForm(values)
      .then((r) => console.log("Submit Successful", r))
      .catch((err) => console.log("Error", err))
      .finally(() => resetFormValues());
  }, []);

  return (
    <PatientBaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
    >
      <Box between={8}>
        <span>
          Aguarde sua senha ser chamada. Seu atendimento ocorrerá em breve.
        </span>
        <span>Agradecemos pela sua paciência!</span>
      </Box>
    </PatientBaseLayout>
  );
};
