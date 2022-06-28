import React from "react";
import styled from "styled-components";

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
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div(() => ({}));

const StyledTitle = styled.span(() => ({}));

const StyledSubtitle = styled.span(() => ({}));
