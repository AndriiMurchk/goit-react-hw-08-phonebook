import { useSelector } from 'react-redux';
import { selectIsAccessDenied } from 'redux/selectors';
import { Container, Toolbar, AppBar } from '@mui/material';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

const AppMainBar = () => {
  const isAccessDenied = useSelector(selectIsAccessDenied);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
          <Navigation />
          {isAccessDenied ? <AuthNav /> : <UserMenu />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppMainBar;