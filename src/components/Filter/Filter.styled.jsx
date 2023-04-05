import styled from "styled-components";
import { Box, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const Field = styled(TextField)`
  width: 400px;
  padding-left: 8px;
  position: relative;
  border-radius: 2;
  
  & label {
    color: rgba(0, 0, 0, 0.6);
    margin-left: 8px;
  }
  
  & input {
    margin-left: 8px;
  }
`

export const Form = styled(Box)`
  width: 400px;
  position: relative;
`

export const Icon = styled(SearchIcon)`
  position: absolute;
  right: 4px;
  bottom: 4px;
  color: #50c5e9;
`