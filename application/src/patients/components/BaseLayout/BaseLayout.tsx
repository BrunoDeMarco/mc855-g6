import React from "react";
import styled from "styled-components";

import GlobalPacientStyle from "../../globalPacientStyles"
import { Header } from "../Header/Header";

interface IBaseLayoutProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const BaseLayout: React.FC<IBaseLayoutProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <Wrapper>
      <GlobalPacientStyle />
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
