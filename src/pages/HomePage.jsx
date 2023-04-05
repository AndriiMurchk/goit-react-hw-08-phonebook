import { Box } from "@mui/material";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const HomePage = () => {
  return (<Box component="section" sx={{ textAlign: "center", paddingTop: "100px", }}>
    <h1>
      Welcome to your Phone book!{' '}
    </h1>
    <ImportContactsIcon fontSize='large' color='primary' sx={{ marginTop: '16px' }} />
  </Box>)
};

export default HomePage;