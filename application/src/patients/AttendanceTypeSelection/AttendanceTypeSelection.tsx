import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PatientBaseLayout } from "../components/PatientBaseLayout/PatientBaseLayout";
import { Box } from "../components/Box/Box";
import { FilledButton } from "../components/FilledButton/FilledButton";
import FormContext from "../FormContextProvider/FormContextProvider";
import { PatientAttendanceType } from "../helpers/form";

export const AttendanceTypeSelection: React.FC = () => {
  const { setAtendimento } = useContext(FormContext);

  return (
    <PatientBaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
      subtitle={
        "Siga as etapas abaixo para realizar seu pré-atendimento e agilizar sua consulta:"
      }
    >
      <Box between={8}>
        <span>O que você veio fazer hoje?</span>
        <Link to={"/recurring-consultation-expertise-selection"}>
          <FilledButton
            onClick={() => setAtendimento(PatientAttendanceType.appointment)}
          >
            Realizar uma consulta
          </FilledButton>
        </Link>
        <Link to={"/administrative-attendance-info"}>
          <FilledButton
            onClick={() =>
              setAtendimento(PatientAttendanceType.receiveMedication)
            }
          >
            Receber medicamento, fazer um teste, curativo ou outro procedimento
          </FilledButton>
        </Link>
        <Link to={"/administrative-attendance-info"}>
          <FilledButton
            onClick={() => setAtendimento(PatientAttendanceType.rescheduling)}
          >
            Pedir remarcação de consulta, relatório, receita ou fazer uma
            pergunta
          </FilledButton>
        </Link>
      </Box>
    </PatientBaseLayout>
  );
};
