import React from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";

export const ScheduledInfo: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
    >
      <span>
        Aguarde sua senha ser chamada. Seu atendimento ocorrerá em breve.
      </span>
      <span>Agradecemos pela sua paciência!</span>
    </BaseLayout>
  );
};
