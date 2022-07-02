import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { Box } from "../components/Box/Box";

export const RecurringConsultationExpertiseSelection: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
    >
      <Box between={8}>
        <span>
          Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua
          consulta:
        </span>
        <span>Selecione em qual especialidade você deseja se consultar:</span>
        <Link to={"/schedule-type-selection"}>
          <Button variant={"contained"}>Cardiologia Pediátrica</Button>
        </Link>
        <Link to={"/schedule-type-selection"}>
          <Button variant={"contained"}>Triagem Neonatal</Button>
        </Link>
        <Link to={"/schedule-type-selection"}>
          <Button variant={"contained"}>Reumatologia</Button>
        </Link>
        <Link to={"/schedule-type-selection"}>
          <Button variant={"contained"}>Genética</Button>
        </Link>
        <Link to={"/other-expertise-info"}>
          <Button>Outra Especialidade</Button>
        </Link>
      </Box>
    </BaseLayout>
  );
};
