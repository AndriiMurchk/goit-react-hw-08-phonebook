import { Box, Container } from "@mui/material";
import ContactForm from "components/ContactForm/ContactForm";
import ContactsList from "components/ContactsList/ContactsList";
import Filter from "components/Filter/Filter";

const ContactsPage = () => {
    return <Box component="main" sx={{ position: "relative" }}>
        <Container maxWidth='xl' sx={{ boxShadow: 1, p: 3 }}>
            <Filter />
            <ContactForm />
            <ContactsList />
        </Container>
    </Box>
};

export default ContactsPage;