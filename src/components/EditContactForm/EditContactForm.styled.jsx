import styled from "styled-components";
import { FormControl, FormHelperText, TextField } from "@mui/material";

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

export const HelperText = styled(FormHelperText)`
  position: absolute;
  bottom: -9px;
  background-color: white;
  padding: 0 4px;
  margin-left: 14px;
`;

export const Header = styled.h3`
  text-align: center;
  margin: 24px 0;
  font-size: 24px;
  color: #0b7529;
`