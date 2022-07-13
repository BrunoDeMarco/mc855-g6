import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PatientBaseLayout } from "../components/PatientBaseLayout/PatientBaseLayout";
import { Box } from "../components/Box/Box";
import { FilledButton } from "../components/FilledButton/FilledButton";
import { OutlinedButton } from "../components/OutlinedButton/OutlinedButton";
import FormContext from "../FormContextProvider/FormContextProvider";

export const RecurringConsultationExpertiseSelection: React.FC = () => {
  const { setEspecialidade } = useContext(FormContext);

  return (
    <PatientBaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
    >
      <Box between={8}>
        <span>
          Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua
          consulta:
        </span>
        <span>Selecione em qual especialidade você deseja se consultar:</span>
        <Link to={"/schedule-type-selection"}>
          <FilledButton
            onClick={() => setEspecialidade("Cardiologia Pediátrica")}
          >
            Cardiologia Pediátrica
          </FilledButton>
        </Link>
        <Link to={"/schedule-type-selection"}>
          <FilledButton onClick={() => setEspecialidade("Triagem Neonatal")}>
            Triagem Neonatal
          </FilledButton>
        </Link>
        <Link to={"/schedule-type-selection"}>
          <FilledButton onClick={() => setEspecialidade("Reumatologia")}>
            Reumatologia
          </FilledButton>
        </Link>
        <Link to={"/schedule-type-selection"}>
          <FilledButton onClick={() => setEspecialidade("Genética")}>
            Genética
          </FilledButton>
        </Link>
        <Link to={"/other-expertise-info"}>
          <OutlinedButton>Outra Especialidade</OutlinedButton>
        </Link>
      </Box>
    </PatientBaseLayout>
  );
};
