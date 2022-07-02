import React from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { Box } from "../components/Box/Box";

export const ScheduledInfo: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
    >
      <Box between={8}>
        <span>
          Aguarde sua senha ser chamada. Seu atendimento ocorrerá em breve.
        </span>
        <span>Agradecemos pela sua paciência!</span>
      </Box>
    </BaseLayout>
  );
};
