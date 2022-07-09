import React from "react";
import { Link } from "react-router-dom";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { Box } from "../components/Box/Box";
import { OutlinedButton } from "../components/OutlinedButton/OutlinedButton";

export const OtherExpertiseInfo: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
    >
      <Box between={8}>
        <span>
          No momento, não temos outras especialidades disponíveis. Você pode
          consultar nossos horários abaixo:
        </span>
        <span>TABELA DE HORÁRIOS AQUI</span>
        <Link to={"/recurring-consultation-expertise-selection"}>
          <OutlinedButton>Voltar</OutlinedButton>
        </Link>
      </Box>
    </BaseLayout>
  );
};
