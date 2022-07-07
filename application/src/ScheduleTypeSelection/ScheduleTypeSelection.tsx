import React from "react";
import { Link } from "react-router-dom";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { Box } from "../components/Box/Box";
import { FilledButton } from "../components/FilledButton/FilledButton";

export const ScheduleTypeSelection: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
      subtitle={
        "Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua consulta:"
      }
    >
      <Box between={8}>
        <span>Sua consulta já estava agendada?</span>
        <Link to={"/scheduled-info"}>
          <FilledButton>Sim</FilledButton>
        </Link>
        <Link to={"/fit-in-info"}>
          <FilledButton>
            Não, mas eu recebi um email me informando de uma consulta encaixe
          </FilledButton>
        </Link>
        <Link to={"/possibly-info"}>
          <FilledButton>Não, mas gostaria de me consultar hoje</FilledButton>
        </Link>
      </Box>
    </BaseLayout>
  );
};
