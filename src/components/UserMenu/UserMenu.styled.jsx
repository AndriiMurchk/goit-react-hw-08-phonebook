import styled from "styled-components";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
  position: relative;
  height: 55px;
  color: #ffffff;

  &:hover, :focus {
    color: #0b7529;
  }
`;