import React, { useContext, useEffect } from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { Box } from "../components/Box/Box";
import FormContext from "../FormContextProvider/FormContextProvider";
import { submitForm } from "../helpers/form";

export const AdministrativeAttendanceInfo: React.FC = () => {
  const { values } = useContext(FormContext);

  useEffect(() => {
    submitForm(values);
  }, []);

  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
    >
      <Box between={8}>
        <span>Por favor, dirija-se à sala 23 à sua direita.</span>
        <span>Em breve lhe atenderemos.</span>
      </Box>
    </BaseLayout>
  );
};
