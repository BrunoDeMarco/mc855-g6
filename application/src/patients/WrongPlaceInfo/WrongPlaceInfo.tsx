import React from "react";
import { Link } from "react-router-dom";
import { PatientBaseLayout } from "../components/PatientBaseLayout/PatientBaseLayout";
import { OutlinedButton } from "../components/OutlinedButton/OutlinedButton";

export const WrongPlaceInfo: React.FC = () => {
  return (
    <PatientBaseLayout
      title={"Boas vindas ao Ambulatório de Pediatria do HC Unicamp!"}
      subtitle={
        "Se está no local errado, dirija-se à recepção para pedir mais informações e entregue sua senha."
      }
    >
      <Link to={"/patient-type-selection"}>
        <OutlinedButton>NÃO ESTOU NO LOCAL ERRADO</OutlinedButton>
      </Link>
    </PatientBaseLayout>
  );
};
