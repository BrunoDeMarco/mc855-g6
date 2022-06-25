import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { CenteredPage } from "../components/CenteredPage/CenteredPage";
import { Stepper } from "../components/Stepper/Stepper";
import { Subtitle } from "../components/Subtitle/Subtitle";
import { Title } from "../components/Title/Title";

export const Home: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  const goToNextStep = () => setStep(step + 1);

  const goToPreviousStep = () => setStep(step - 1);

  return (
    <CenteredPage>
      <Stepper
        currentStep={step}
        stepElements={[
          <>
            <Title>
              Boas vindas ao Ambulatório de Pediatria do HC Unicamp!
            </Title>
            <Subtitle>
              Siga as etapas abaixo para realizar seu pré-atendimento e agilizar
              sua consulta:
            </Subtitle>
            <TextField
              name={"senha"}
              value={""}
              label={"Digite sua senha aqui."}
            />
            <Button variant={"contained"} onClick={goToNextStep}>
              Próxima Etapa
            </Button>
          </>,
          <>
            <Title>
              Boas vindas ao Ambulatório de Pediatria do HC Unicamp!
            </Title>
            <Subtitle>
              Siga as etapas abaixo para realizar seu pré-atendimento e agilizar
              sua consulta:
            </Subtitle>
            <Button variant={"contained"} onClick={goToNextStep}>
              JÁ SOU PACIENTE DO HC UNICAMP
            </Button>
            <Button variant={"contained"} onClick={goToNextStep}>
              ESTA É A MINHA PRIMEIRA VEZ NO HC UNICAMP
            </Button>
            <Button onClick={goToNextStep}>ESTOU NO LOCAL ERRADO</Button>
          </>,
          <>
            <Title>
              Boas vindas ao Ambulatório de Pediatria do HC Unicamp!
            </Title>
            <Subtitle>
              Se está no local errado, dirija-se à recepção para pedir mais
              informações e entregue sua senha.
            </Subtitle>
            <Button onClick={goToPreviousStep}>
              NÃO ESTOU NO LOCAL ERRADO
            </Button>
          </>,
        ]}
      />
    </CenteredPage>
  );
};
