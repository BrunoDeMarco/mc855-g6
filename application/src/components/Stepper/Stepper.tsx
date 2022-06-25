import React from "react";

interface IStepperProps {
  currentStep: number;
  stepElements: React.ReactElement[];
}

export const Stepper: React.FC<IStepperProps> = ({
  currentStep,
  stepElements,
}) => {
  return <>{stepElements.map((e, i) => currentStep === i && <>{e}</>)}</>;
};
