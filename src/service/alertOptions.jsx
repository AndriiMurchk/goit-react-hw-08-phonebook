import { closeSnackbar } from "notistack";
import { MaterialDesignContent } from 'notistack'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import styled from "styled-components";

export const StyledMaterialDesignContent = styled(MaterialDesignContent)`
width: 400px;
  &.notistack-MuiContent-success{
  background-color: #2D7738;
  }
  &.notistack-MuiContent-error {
  background-color: #a62633;
}
`

export const alertOptions = (alert) => {
  return {
    autoHideDuration: 3000,
    variant: alert,
    anchorOrigin: { horizontal: 'center', vertical: 'top' },
    Components: {
      success: StyledMaterialDesignContent,
      error: StyledMaterialDesignContent,
    },
    TransitionProps: { direction: 'down' },
    action: (snackbarId) => (
      <IconButton aria-label="delete" color="inherit" onClick={() => closeSnackbar(snackbarId)}>
        <CloseIcon />
      </IconButton>
    )
}}
        
export const StyledComponents = {
  default: StyledMaterialDesignContent,
  success: StyledMaterialDesignContent,
  error: StyledMaterialDesignContent,
  warning: StyledMaterialDesignContent,
  info: StyledMaterialDesignContent,
}