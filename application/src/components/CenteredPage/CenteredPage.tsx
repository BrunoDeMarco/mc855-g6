import React from "react";
import styled from "styled-components";

interface ICenteredPageProps {
  children?: React.ReactNode;
}

export const CenteredPage: React.FC<ICenteredPageProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div(() => ({
  display: "flex",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column" as "column",
}));
