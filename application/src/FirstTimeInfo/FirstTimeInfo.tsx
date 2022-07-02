import React from "react";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { Box } from "../components/Box/Box";

export const FirstTimeInfo: React.FC = () => {
  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
    >
      <Box between={8}>
        <span>Aguarde sua senha ser chamada.</span>
        <span>
          Você receberá um documento, que deverá levar, seguindo a faixa
          amarela, para fazer seu cadastro e registrar sua consulta em nosso
          sistema.
        </span>
        <span>
          Após realizar seu cadastro, poderá retornar para a recepção
          diretamente. Não há necessidade de aguardar sua senha ser chamada
          novamente.
        </span>
      </Box>
    </BaseLayout>
  );
};
