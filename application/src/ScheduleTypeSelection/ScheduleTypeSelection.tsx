import { Button } from "@mui/material";
import React from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";

export const ScheduleTypeSelection: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
      subtitle={
        "Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua consulta:"
      }
    >
      <span>Sua consulta já estava agendada?</span>
      <Button variant={"contained"}>Sim</Button>
      <Button variant={"contained"}>
        Não, mas eu recebi um email me informando de uma consulta encaixe
      </Button>
      <Button variant={"contained"}>
        Não, mas gostaria de me consultar hoje
      </Button>
    </BaseLayout>
  );
};
