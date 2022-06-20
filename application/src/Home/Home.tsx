import { Button, TextField } from "@mui/material";
import React from "react";
import { CenteredPage } from "../components/CenteredPage/CenteredPage";
import { Subtitle } from "../components/Subtitle/Subtitle";
import { Title } from "../components/Title/Title";

export const Home: React.FC = () => {
  return (
    <CenteredPage>
      <Title>Boas vindas ao Ambulatório de Pediatria do HC Unicamp!</Title>
      <Subtitle>
        Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua
        consulta:
      </Subtitle>
      <TextField name={"senha"} value={""} label={"Digite sua senha aqui."} />
      <Button variant={"contained"}>Próxima Etapa</Button>
    </CenteredPage>
  );
};
