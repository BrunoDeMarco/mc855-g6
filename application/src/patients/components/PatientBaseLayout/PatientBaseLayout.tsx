import React from "react";
import styled from "styled-components";

import GlobalPatientStyle from "../../globalPatientStyles";
import { Header } from "../Header/Header";

interface IPatientBaseLayoutProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const PatientBaseLayout: React.FC<IPatientBaseLayoutProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <Wrapper>
      <GlobalPatientStyle />
      <Header />
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column" as "column",
}));

const StyledTitle = styled.span(() => ({
  fontSize: 18,
  marginBottom: 16,
}));

const StyledSubtitle = styled.span(() => ({
  fontSize: 16,
  marginBottom: 16,
}));
