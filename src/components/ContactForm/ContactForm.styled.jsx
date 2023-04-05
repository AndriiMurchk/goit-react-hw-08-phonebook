import styled from "styled-components";
import { Button, FormControl, FormHelperText, TextField } from "@mui/material";

export const Field = styled(TextField)`
  & label {
    color: rgba(0, 0, 0, 0.6);
    }
`;

export const Input = styled(FormControl)`
  color: rgba(0, 0, 0, 0.6);
  
  & label {
    color: rgba(0, 0, 0, 0.6);
    }
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 0;
`;

export const HelperText = styled(FormHelperText)`
  text-align: center;
  position: absolute;
  background-color: white;
  padding: 0 4px;
  margin-left: 14px;
`;