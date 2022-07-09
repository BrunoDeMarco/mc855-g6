import { Button } from "@mui/material";
import styled from "styled-components";

export const FilledButton = styled(Button)(() => ({
  "&&": {
    backgroundColor: "black",
    color: "white",
    textDecoration: "none",
    width: "100%",
    fontWeight: "bold",
    border: "2px solid transparent",
    ":hover": { backgroundColor: "black" },
  },
}));
