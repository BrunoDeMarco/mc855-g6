import { Button } from "@mui/material";
import styled from "styled-components";

export const OutlinedButton = styled(Button)(() => ({
  "&&": {
    backgroundColor: "white",
    color: "black",
    width: "100%",
    fontWeight: "bold",
    border: "2px solid black",
    ":hover": { backgroundColor: "white" },
  },
}));
