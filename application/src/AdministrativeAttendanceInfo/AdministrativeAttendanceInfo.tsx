import React from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";

export const AdministrativeAttendanceInfo: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
    >
      <span>Por favor, dirija-se à sala 23 à sua direita.</span>
      <span>Em breve lhe atenderemos.</span>
    </BaseLayout>
  );
};
