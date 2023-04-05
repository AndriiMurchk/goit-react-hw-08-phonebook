import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { selectFilter } from "redux/selectors";
import { Field, Form, Icon } from "./Filter.styled";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    
    const onChange = (e) => {
        let contactToFind = e.target.value.trim();
        dispatch(setFilter(contactToFind));
    };

    return (
        <Container component="div">
            <Form component="form" sx={{ mb: '36px' }}>
                <Field id="filter" label="Find contacts by name" variant="standard" size="small"
                    onChange={onChange}
                    value={filter}>
                </Field>
                <Icon />
            </Form>    
        </Container>    
    )
}

export default Filter;