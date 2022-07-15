import React, { useContext, useEffect } from "react";
import { PatientBaseLayout } from "../components/PatientBaseLayout/PatientBaseLayout";
import { Box } from "../components/Box/Box";
import FormContext from "../FormContextProvider/FormContextProvider";
import { submitForm } from "../helpers/form";

export const PossiblyInfo: React.FC = () => {
  const { values } = useContext(FormContext);

  useEffect(() => {
    submitForm(values)
      .then((r) => console.log("Submit Successful", r))
      .catch((err) => console.log("Error", err));
  }, []);

  return (
    <PatientBaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
    >
      <Box between={8}>
        <span>Por favor, dirija-se à sala 23 à sua direita.</span>
        <span>
          Em breve lhe atenderemos e veremos se é possível agendar uma consulta
          hoje.
        </span>
      </Box>
    </PatientBaseLayout>
  );
};
