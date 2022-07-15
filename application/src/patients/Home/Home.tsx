import { TextField } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PatientBaseLayout } from "../components/PatientBaseLayout/PatientBaseLayout";
import { Box } from "../components/Box/Box";
import { FilledButton } from "../components/FilledButton/FilledButton";
import FormContext from "../FormContextProvider/FormContextProvider";

export const Home: React.FC = () => {
  const { values, setSenha } = useContext(FormContext);

  return (
    <PatientBaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
      subtitle={
        "Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua consulta:"
      }
    >
      <Box between={8}>
        <TextField
          name={"senha"}
          value={values.senha}
          label={"Digite sua senha aqui."}
          onChange={(e) => setSenha(e.target.value)}
          type={"number"}
        />
        <Link to={"/patient-type-selection"}>
          <FilledButton>Próxima Etapa</FilledButton>
        </Link>
      </Box>
    </PatientBaseLayout>
  );
};
