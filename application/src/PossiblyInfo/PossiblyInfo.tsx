import React from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { Box } from "../components/Box/Box";

export const PossiblyInfo: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
    >
      <Box between={8}>
        <span>Por favor, dirija-se à sala 23 à sua direita.</span>
        <span>
          Em breve lhe atenderemos e veremos se é possível agendar uma consulta
          hoje.
        </span>
      </Box>
    </BaseLayout>
  );
};
