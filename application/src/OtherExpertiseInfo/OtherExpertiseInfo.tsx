import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";

export const OtherExpertiseInfo: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
    >
      <span>
        No momento, não temos outras especialidades disponíveis. Você pode
        consultar nossos horários abaixo:
      </span>
      <span>TABELA DE HORÁRIOS AQUI</span>
      <Link to={"/recurring-consultation-expertise-selection"}>
        <Button>Voltar</Button>
      </Link>
    </BaseLayout>
  );
};
