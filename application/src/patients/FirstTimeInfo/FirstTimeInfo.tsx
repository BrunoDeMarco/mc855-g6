import React, { useContext, useEffect } from "react";
import { PatientBaseLayout } from "../components/PatientBaseLayout/PatientBaseLayout";
import { Box } from "../components/Box/Box";
import FormContext from "../FormContextProvider/FormContextProvider";
import { submitForm } from "../helpers/form";

export const FirstTimeInfo: React.FC = () => {
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
        <span>Aguarde sua senha ser chamada.</span>
        <span>
          Você receberá um documento, que deverá levar, seguindo a faixa
          amarela, para fazer seu cadastro e registrar sua consulta em nosso
          sistema.
        </span>
        <span>
          Após realizar seu cadastro, poderá retornar para a recepção
          diretamente. Não há necessidade de aguardar sua senha ser chamada
          novamente.
        </span>
      </Box>
    </PatientBaseLayout>
  );
};
