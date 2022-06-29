import { Button, TextField } from "@mui/material";
import React from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";

export const HCNumberInput: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
      subtitle={
        "Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua consulta:"
      }
    >
      <TextField name={"hc"} value={""} label={"Digite o seu HC aqui."} />
      <Button variant={"contained"}>Próxima Etapa</Button>
    </BaseLayout>
  );
};
