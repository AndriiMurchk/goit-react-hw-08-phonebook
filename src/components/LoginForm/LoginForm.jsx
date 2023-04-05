import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Box, Button, Container, Grid, IconButton, Link, Typography, OutlinedInput, InputLabel, InputAdornment, Paper } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { logIn } from "redux/operations";
import { selectUserError } from "redux/selectors";
import { loginSchema } from "service/validationScheme";
import { StyledField, Input, HelperText } from "./LoginForm.styled";

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectUserError);
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, reset, control, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handleLogIn = (loginData) => {
    dispatch(logIn(loginData));
    reset();
  };

  const emailMessage = (errors.email?.message.charAt(0).toUpperCase()+ errors.email?.message.slice(1)) || '';
  const passwordMessage = (errors.password?.message.charAt(0).toUpperCase()+ errors.password?.message.slice(1)) || '';

  return (
    <Container component="section" maxWidth="xs">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.light' }} />
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit(handleLogIn)} sx={{ mt: 3 }}>
          <Grid container>
            <Grid item xs={12} sx={{mb: '28px', position: 'relative'}}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => <StyledField {...field} {...register("email")}
                  label="Email *"
                  fullWidth
                  type="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  id="email"
                />}/>
              <HelperText sx={{ml: '12px', color: '#a62633'}}>{emailMessage}</HelperText>
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
              <HelperText sx={{ml: '12px', color: '#a62633'}}>{passwordMessage}</HelperText>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink to="/register">
                <Link variant="body2" component='span'>
                  Don't have an account yet? Sign up.
                </Link>
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {error && <Paper elevation={6} sx={{p: '8px', m: '32px 0', textAlign: 'center', color: '#a62633'}}>
        Incorrect user data (login or password). Please, check your details and try again!
      </Paper>}
    </Container>
  );
};

export default LoginForm;