import { Toolbar } from '@mui/material';
import { Link, StyledButton } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Toolbar disableGutters sx={{ display: 'flex', gap: '16px' }}>
      <StyledButton sx={{ color: 'white', display: 'block' }}>
        <Link to="/register" >
          Register
        </Link>
      </StyledButton>
      <StyledButton sx={{ color: 'white', display: 'block' }}>
        <Link to="/login">
          Log In
        </Link>
      </StyledButton>
    </Toolbar>
  );
};

export default AuthNav;