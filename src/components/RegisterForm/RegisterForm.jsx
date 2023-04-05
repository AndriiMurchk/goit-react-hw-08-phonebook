import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { createUser } from "redux/operations";
import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Box, Button, Container, Grid, IconButton, Link, Typography, OutlinedInput, InputLabel, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { registerSchema } from "service/validationScheme";
import { Field, HelperText, Input } from "./RegisterForm.styled";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, reset, control, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterSubmit = userData => {
    dispatch(createUser(userData));
    reset();
  };

  const nameMessage = (errors.name?.message.charAt(0).toUpperCase()+ errors.name?.message.slice(1)) || '';
  const emailMessage = (errors.email?.message.charAt(0).toUpperCase() + errors.email?.message.slice(1)) || '';
  const passwordMessage = (errors.password?.message.charAt(0).toUpperCase() + errors.password?.message.slice(1)) || '';
  
  return (
    <Container component="section" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.light' }} />
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit(handleRegisterSubmit)} sx={{ mt: 3 }}>
          <Grid container>
            <Grid item xs={12} sx={{ mb: '28px', position: 'relative' }}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Field {...field} {...register("name")}
                  label="Name *"
                  fullWidth
                  type="text"
                  autoComplete="name"
                  autoFocus
                  id="name"
                />}/>
              <HelperText sx={{ ml: '14px', color: '#0b7529' }}>{nameMessage}</HelperText>
            </Grid>
            <Grid item xs={12} sx={{ mb: '28px', position: 'relative' }}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => <Field {...field} {...register("email")}
                  label="Email *"
                  fullWidth
                  type="email"
                  name="email"
                  autoComplete="email"
                  id="email"
                />}/>
              <HelperText sx={{ ml: '14px', color: '#0b7529' }}>{emailMessage}</HelperText>
            </Grid>
            <Grid item xs={12} sx={{mb: '28px', position: 'relative'}}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => <Input
                  variant="outlined"
                  fullWidth
                  {...field}
                  {...register("password")}>
                  <InputLabel htmlFor="password">Password *</InputLabel>
                  <OutlinedInput
                    fullWidth
                    name="password"
                    label="Password *"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="new-password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    } />
                </Input>
                } />
              <HelperText sx={{ml: '14px', color: '#0b7529'}}>{passwordMessage}</HelperText>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 0, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink to="/login">
                <Link variant="body2" component='span'>
                  Already have an account? Sign in.
                </Link>
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
