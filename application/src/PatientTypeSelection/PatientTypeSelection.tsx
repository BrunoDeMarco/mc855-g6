import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { Box } from "../components/Box/Box";

export const PatientTypeSelection: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
      subtitle={
        "Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua consulta:"
      }
    >
      <Box between={8}>
        <Link to={"/hc-number-input"}>
          <Button variant={"contained"}>JÁ SOU PACIENTE DO HC UNICAMP</Button>
        </Link>
        <Link to={"/not-scheduled-expertise-selection"}>
          <Button variant={"contained"}>
            ESTA É A MINHA PRIMEIRA VEZ NO HC UNICAMP
          </Button>
        </Link>
        <Link to={"/wrong-place-info"}>
          <Button>ESTOU NO LOCAL ERRADO</Button>
        </Link>
      </Box>
    </BaseLayout>
  );
};
