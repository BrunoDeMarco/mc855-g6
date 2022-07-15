import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import SessionContext from "../../SessionContextProvider/SessionContextProvider";

interface IProtectedProps {
  children?: React.ReactNode;
}

export const Protected: React.FC<IProtectedProps> = ({ children }) => {
  const { values } = useContext(SessionContext);

  if (values.loggedIn) {
    return <Box>{children}</Box>;
  }

  return <Navigate to="/login" replace />;
};
