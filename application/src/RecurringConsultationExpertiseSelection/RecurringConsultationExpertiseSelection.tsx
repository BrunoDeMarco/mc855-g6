import { Button } from "@mui/material";
import React from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";

export const RecurringConsultationExpertiseSelection: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
    >
      <span>
        Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua
        consulta:
      </span>
      <span>Selecione em qual especialidade você deseja se consultar:</span>
      <Button variant={"contained"}>Cardiologia Pediátrica</Button>
      <Button variant={"contained"}>Triagem Neonatal</Button>
      <Button variant={"contained"}>Reumatologia</Button>
      <Button variant={"contained"}>Genética</Button>
      <Button>Outra Especialidade</Button>
    </BaseLayout>
  );
};
