import React from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";

export const PossiblyInfo: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
    >
      <span>Por favor, dirija-se à sala 23 à sua direita.</span>
      <span>
        Em breve lhe atenderemos e veremos se é possível agendar uma consulta
        hoje.
      </span>
    </BaseLayout>
  );
};
