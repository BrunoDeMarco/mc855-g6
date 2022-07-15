import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PatientBaseLayout } from "../components/PatientBaseLayout/PatientBaseLayout";
import { Box } from "../components/Box/Box";
import { FilledButton } from "../components/FilledButton/FilledButton";
import { OutlinedButton } from "../components/OutlinedButton/OutlinedButton";
import FormContext from "../FormContextProvider/FormContextProvider";
import { MedicalSpeciality } from "../helpers/form";

export const NotScheduledExpertiseSelection: React.FC = () => {
  const { setEspecialidade } = useContext(FormContext);

  return (
    <PatientBaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
      subtitle={
        "Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua consulta:"
      }
    >
      <Box between={8}>
        <span>Selecione em qual especialidade você deseja se consultar:</span>
        <Link to={"/first-time-info"}>
          <FilledButton
            onClick={() =>
              setEspecialidade(MedicalSpeciality.pediatricCardiology)
            }
          >
            Cardiologia Pediátrica
          </FilledButton>
        </Link>
        <Link to={"/first-time-info"}>
          <FilledButton
            onClick={() =>
              setEspecialidade(MedicalSpeciality.neonatalScreening)
            }
          >
            Triagem Neonatal
          </FilledButton>
        </Link>
        <Link to={"/first-time-info"}>
          <FilledButton
            onClick={() => setEspecialidade(MedicalSpeciality.rheumatology)}
          >
            Reumatologia
          </FilledButton>
        </Link>
        <Link to={"/first-time-info"}>
          <FilledButton
            onClick={() => setEspecialidade(MedicalSpeciality.genetic)}
          >
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
