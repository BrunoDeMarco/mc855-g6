import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { Box } from "../components/Box/Box";

export const Home: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
      subtitle={
        "Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua consulta:"
      }
    >
      <Box between={8}>
        <TextField name={"senha"} value={""} label={"Digite sua senha aqui."} />
        <Link to={"/patient-type-selection"}>
          <Button variant={"contained"}>Próxima Etapa</Button>
        </Link>
      </Box>
    </BaseLayout>
  );
};
