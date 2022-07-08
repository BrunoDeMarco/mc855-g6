import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BaseLayout } from "../components/BaseLayout/BaseLayout";
import { Box } from "../components/Box/Box";
import { FilledButton } from "../components/FilledButton/FilledButton";
import { OutlinedButton } from "../components/OutlinedButton/OutlinedButton";
import FormContext from "../FormContextProvider/FormContextProvider";

export const NotScheduledExpertiseSelection: React.FC = () => {
  const { setEspecialidade } = useContext(FormContext);

  return (
    <BaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
      subtitle={
        "Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua consulta:"
      }
    >
      <Box between={8}>
        <span>Selecione em qual especialidade você deseja se consultar:</span>
        <Link to={"/first-time-info"}>
          <FilledButton
            onClick={() => setEspecialidade("Cardiologia Pediátrica")}
          >
            Cardiologia Pediátrica
          </FilledButton>
        </Link>
        <Link to={"/first-time-info"}>
          <FilledButton onClick={() => setEspecialidade("Triagem Neonatal")}>
            Triagem Neonatal
          </FilledButton>
        </Link>
        <Link to={"/first-time-info"}>
          <FilledButton onClick={() => setEspecialidade("Reumatologia")}>
            Reumatologia
          </FilledButton>
        </Link>
        <Link to={"/first-time-info"}>
          <FilledButton onClick={() => setEspecialidade("Genética")}>
            Genética
          </FilledButton>
        </Link>
        <Link to={"/other-expertise-info"}>
          <OutlinedButton>Outra Especialidade</OutlinedButton>
        </Link>
      </Box>
    </BaseLayout>
  );
};
