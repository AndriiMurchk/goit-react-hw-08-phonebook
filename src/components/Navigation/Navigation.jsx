import { useSelector } from "react-redux";
import { selectIsAccessDenied } from "redux/selectors";
import { Toolbar } from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Link, StyledButton } from "./Navigation.styled";

const Navigation = () => {
  const isAccessDenied = useSelector(selectIsAccessDenied);
  
  return (
    <Toolbar disableGutters sx={{ display: 'flex', gap: '16px' }}>
      <StyledButton sx={{ color: 'white', display: 'block' }}>
        <Link to="/">
          <HomeRoundedIcon fontSize="large" />
        </Link>
      </StyledButton>
      {!isAccessDenied && <StyledButton sx={{ color: 'white', display: 'block' }}>
        <Link to="/contacts">
          Contacts
        </Link>
      </StyledButton>}
    </Toolbar>
  );
};

export default Navigation;