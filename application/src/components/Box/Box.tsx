import React from "react";
import styled from "styled-components";

interface IBoxProps {
  inline?: boolean;
  between?: number;
  justify?: string;
  align?: string;
  children?: React.ReactNode;
}

export const Box: React.FC<IBoxProps> = ({
  inline,
  between,
  justify,
  align,
  children,
}) => {
  return (
    <Wrapper inline={inline} between={between} justify={justify} align={align}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<IBoxProps>(
  ({ inline, between, justify, align }) => ({
    display: "flex",
    flexDirection: inline ? "row" : "column",
    "& > :not(:last-child)": {
      marginBottom: between,
    },
    justifyContent: justify,
    alignItems: align,
  })
);
