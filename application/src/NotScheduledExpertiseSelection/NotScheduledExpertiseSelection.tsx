import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";

export const NotScheduledExpertiseSelection: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
      subtitle={
        "Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua consulta:"
      }
    >
      <span>Selecione em qual especialidade você deseja se consultar:</span>
      <Link to={"/first-time-info"}>
        <Button variant={"contained"}>Cardiologia Pediátrica</Button>
      </Link>
      <Link to={"/first-time-info"}>
        <Button variant={"contained"}>Triagem Neonatal</Button>
      </Link>
      <Link to={"/first-time-info"}>
        <Button variant={"contained"}>Reumatologia</Button>
      </Link>
      <Link to={"/first-time-info"}>
        <Button variant={"contained"}>Genética</Button>
      </Link>
    </BaseLayout>
  );
};
