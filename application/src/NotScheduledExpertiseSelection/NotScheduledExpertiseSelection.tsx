import React from "react";
import { Link } from "react-router-dom";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { Box } from "../components/Box/Box";
import { FilledButton } from "../components/FilledButton/FilledButton";
import { OutlinedButton } from "../components/OutlinedButton/OutlinedButton";

export const NotScheduledExpertiseSelection: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
      subtitle={
        "Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua consulta:"
      }
    >
      <Box between={8}>
        <span>Selecione em qual especialidade você deseja se consultar:</span>
        <Link to={"/first-time-info"}>
          <FilledButton>Cardiologia Pediátrica</FilledButton>
        </Link>
        <Link to={"/first-time-info"}>
          <FilledButton>Triagem Neonatal</FilledButton>
        </Link>
        <Link to={"/first-time-info"}>
          <FilledButton>Reumatologia</FilledButton>
        </Link>
        <Link to={"/first-time-info"}>
          <FilledButton>Genética</FilledButton>
        </Link>
        <Link to={"/other-expertise-info"}>
          <OutlinedButton>Outra Especialidade</OutlinedButton>
        </Link>
      </Box>
    </BaseLayout>
  );
};
