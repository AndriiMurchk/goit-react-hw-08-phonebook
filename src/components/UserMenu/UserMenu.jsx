import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Toolbar } from '@mui/material';
import { logOut } from 'redux/operations';
import { selectUserName } from 'redux/selectors';
import { StyledButton } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const handleLogOut = () => {
    dispatch(logOut());
  }

  return (
    <Toolbar disableGutters sx={{ display: 'flex', gap: '16px' }}>
      <p >Welcome, {userName}!</p>
      <Avatar sx={{ color: 'secondary.light' }} />
      <StyledButton sx={{ color: 'white', display: 'block' }} onClick={handleLogOut}>
        Logout
      </StyledButton>
    </Toolbar>
  );
};

export default UserMenu;