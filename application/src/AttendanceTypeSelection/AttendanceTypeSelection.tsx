import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";

export const AttendanceTypeSelection: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
      subtitle={
        "Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua consulta:"
      }
    >
      <span>O que você veio fazer hoje?</span>
      <Link to={"/recurring-consultation-expertise-selection"}>
        <Button variant={"contained"}>Realizar uma consulta</Button>
      </Link>
      <Link to={"/administrative-attendance-info"}>
        <Button variant={"contained"}>
          Receber medicamento, fazer um teste, curativo ou outro procedimento
        </Button>
      </Link>
      <Link to={"/administrative-attendance-info"}>
        <Button variant={"contained"}>
          Pedir remarcação de consulta, relatório, receita ou fazer uma pergunta
        </Button>
      </Link>
    </BaseLayout>
  );
};
