import React from "react";
import { Link } from "react-router-dom";
import { PatientBaseLayout } from "../components/PatientBaseLayout/PatientBaseLayout";
import { Box } from "../components/Box/Box";
import { FilledButton } from "../components/FilledButton/FilledButton";
import { OutlinedButton } from "../components/OutlinedButton/OutlinedButton";

export const PatientTypeSelection: React.FC = () => {
  return (
    <PatientBaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
      subtitle={
        "Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua consulta:"
      }
    >
      <Box between={8}>
        <Link to={"/hc-number-input"}>
          <FilledButton>JÁ SOU PACIENTE DO HC UNICAMP</FilledButton>
        </Link>
        <Link to={"/not-scheduled-expertise-selection"}>
          <FilledButton>ESTA É A MINHA PRIMEIRA VEZ NO HC UNICAMP</FilledButton>
        </Link>
        <Link to={"/wrong-place-info"}>
          <OutlinedButton>ESTOU NO LOCAL ERRADO</OutlinedButton>
        </Link>
      </Box>
    </PatientBaseLayout>
  );
};
