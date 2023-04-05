import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { selectContacts } from "redux/selectors";
import { editContact } from "redux/operations";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Button, Paper } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { alertOptions } from "service/alertOptions";
import { contactSchema } from "service/validationScheme";
import { Field, Header, HelperText } from "./EditContactForm.styled";

const EditContactForm = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const { register, handleSubmit, reset, control, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(contactSchema),
  });

  useEffect(() => {
    const contact = contacts.find(contact => contact.id === id);
    setName(contact.name);
    setNumber(contact.number);
    setValue("name", contact.name);
    setValue("number", contact.number);
  }, [id, contacts, setValue])

  const onFormSubmit = editedData => {
    dispatch(editContact({ editedData, id }));
    enqueueSnackbar(`Contact was successfully changed!`, alertOptions('success'));
    reset();
    onClose();
  };
    
  const onChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        setValue("name", e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        setValue("number", e.target.value);
        break;
      default:
        break;
    }
  };
  
  const nameMessage = (errors.name?.message.charAt(0).toUpperCase() + errors.name?.message.slice(1)) || '';
  const numberMessage = (errors.number?.message.charAt(0).toUpperCase() + errors.number?.message.slice(1)) || '';

  return (
    <Paper elevation={3} sx={{ p: '16px' }}>
      <Box component="form"
        onSubmit={handleSubmit(onFormSubmit)}>
        <Header>Edit contact:</Header>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{position: 'relative'}}>
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
                value={name}
                onChange={(event) => onChange(event)}
              />} />
            <HelperText sx={{ ml: '14px', color: '#a62633' }}>{nameMessage}</HelperText>
          </Grid>
          <Grid item xs={12} sx={{position: 'relative'}}>
            <Controller
              name="number"
              control={control}
              render={({ field }) => <Field {...field} {...register("number")}
                variant="standard"
                label="Number *"
                fullWidth
                type="tel"
                id="number"
                value={number}
                onChange={(event) => onChange(event)}
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
          Save changes
        </Button>
      </Box>
    </Paper>
  )
};

export default EditContactForm;