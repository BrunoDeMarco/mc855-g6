import { Button } from "@mui/material";
import React from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";

export const WrongPlaceInfo: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
      subtitle={
        "Se está no local errado, dirija-se à recepção para pedir mais informações e entregue sua senha."
      }
    >
      <Button>NÃO ESTOU NO LOCAL ERRADO</Button>
    </BaseLayout>
  );
};
