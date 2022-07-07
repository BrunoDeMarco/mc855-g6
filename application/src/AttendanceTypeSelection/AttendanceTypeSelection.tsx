import React from "react";
import { Link } from "react-router-dom";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { Box } from "../components/Box/Box";
import { FilledButton } from "../components/FilledButton/FilledButton";

export const AttendanceTypeSelection: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
      subtitle={
        "Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua consulta:"
      }
    >
      <Box between={8}>
        <span>O que você veio fazer hoje?</span>
        <Link to={"/recurring-consultation-expertise-selection"}>
          <FilledButton>Realizar uma consulta</FilledButton>
        </Link>
        <Link to={"/administrative-attendance-info"}>
          <FilledButton>
            Receber medicamento, fazer um teste, curativo ou outro procedimento
          </FilledButton>
        </Link>
        <Link to={"/administrative-attendance-info"}>
          <FilledButton>
            Pedir remarcação de consulta, relatório, receita ou fazer uma
            pergunta
          </FilledButton>
        </Link>
      </Box>
    </BaseLayout>
  );
};
