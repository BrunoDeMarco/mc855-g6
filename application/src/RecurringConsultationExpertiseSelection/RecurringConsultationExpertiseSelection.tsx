import React from "react";
import { Link } from "react-router-dom";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { Box } from "../components/Box/Box";
import { FilledButton } from "../components/FilledButton/FilledButton";
import { OutlinedButton } from "../components/OutlinedButton/OutlinedButton";

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
          <FilledButton>Cardiologia Pediátrica</FilledButton>
        </Link>
        <Link to={"/schedule-type-selection"}>
          <FilledButton>Triagem Neonatal</FilledButton>
        </Link>
        <Link to={"/schedule-type-selection"}>
          <FilledButton>Reumatologia</FilledButton>
        </Link>
        <Link to={"/schedule-type-selection"}>
          <FilledButton>Genética</FilledButton>
        </Link>
        <Link to={"/other-expertise-info"}>
          <OutlinedButton>Outra Especialidade</OutlinedButton>
        </Link>
      </Box>
    </BaseLayout>
  );
};
