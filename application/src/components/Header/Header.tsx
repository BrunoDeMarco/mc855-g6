import React from "react";
import styled from "styled-components";

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <Title>HC Unicamp</Title>
      <Splitter />
    </Wrapper>
  );
};

const Wrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column" as "column",
  margin: "8px 0 8px 0",
}));

const Title = styled.span(() => ({
  fontFamily: "Vidaloka",
  fontSize: 36,
}));

const Splitter = styled.div(() => ({
  width: "100%",
  height: 7,
  backgroundColor: "black",
  borderRadius: 4,
  marginTop: 8,
}));
