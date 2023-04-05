import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Box, Container, Fab, Grid, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { enqueueSnackbar } from "notistack";
import { addContact } from "redux/operations";
import { selectContacts } from "redux/selectors";
import { alertOptions } from "service/alertOptions";
import { CloseButton, Field, HelperText } from "./ContactForm.styled";
import { contactSchema } from "service/validationScheme";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [modalOpen, setModalOpen] = useState(false);

  const { register, handleSubmit, reset, control, formState: { errors } } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: '',
      number: '',
    }
  });
  
  const onFormSubmit = contact => {
    const isExist = contacts.find(({ name }) => name.toLowerCase() === contact.name.toLowerCase());
    if (isExist) {
      return enqueueSnackbar(`${contact.name} is already in contacts.`, alertOptions('error'))
    };
    
    dispatch(addContact(contact));
    enqueueSnackbar(`${contact.name} was successfully added!`, alertOptions('success'));
    reset();
    onModalClose();
  };

  const onModalOpen = () => {
    setModalOpen(true);
  };

  const onModalClose = () => {
    setModalOpen(false);
  };

  const nameMessage = (errors.name?.message.charAt(0).toUpperCase()+ errors.name?.message.slice(1)) || '';
  const numberMessage = (errors.number?.message.charAt(0).toUpperCase() + errors.number?.message.slice(1)) || '';
  
  return (
    <Container component="div" sx={{ mb: '16px' }}>
      <Tooltip title="Add contact" >
        <Fab color="primary" aria-label="add contact" sx={{ position: "absolute", top: "20px", left: "650px" }} onClick={onModalOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Dialog open={modalOpen} onClose={onModalClose} >
        <DialogTitle>Add contact</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit(onFormSubmit)} sx={{ mt: 2 }}>
            <Grid container>
              <Grid item xs={12} sx={{ mb: '20px', position: 'relative' }}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => <Field {...field} {...register("name")}
                    variant="standard"
                    label="Name *"
                    fullWidth
                    type="text"
                    autoFocus
                    id="name"
                  />} />
                <HelperText sx={{ ml: '14px', color: '#a62633' }}>{nameMessage}</HelperText>
              </Grid>
              <Grid item xs={12} sx={{ mb: '20px', position: 'relative' }}>
                <Controller
                  name="number"
                  control={control}
                  render={({ field }) => <Field {...field} {...register("number")}
                    variant="standard"
                    label="Phone number *"
                    fullWidth
                    type="tel"
                    autoComplete="number"
                    id="number"
                  />} />
                <HelperText sx={{ ml: '14px', color: '#a62633' }}>{numberMessage}</HelperText>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add contact
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <CloseButton onClick={onModalClose} sx={{ position: "absolute", top: "8px", right: "8px", p: '0', minWidth:'24px' }}><CloseIcon /></CloseButton>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default ContactForm;