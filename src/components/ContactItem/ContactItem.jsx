import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import { stringAvatar } from "service/stringAvatar";
import { Avatar, Divider, IconButton, ListItemButton, ListItemIcon, ListItemText, Tooltip } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ContactItem = ({ contact, editContact, handleListItemClick, selected }) => {
    const dispatch = useDispatch();

    const { id, name, number } = contact;

    const deleteContactById = (contactId) => {
        dispatch(deleteContact(contactId));
    };

    return <li>
        <ListItemButton
            component="div"
            onClick={(event) => handleListItemClick(event, id)}
            selected={selected}
        >
            <ListItemIcon>
                <Avatar {...stringAvatar(`${name}`)}></Avatar>
            </ListItemIcon>
            <ListItemText primary={<p>{name}: {number}</p>} />
            <Tooltip title="Delete" onClick={() => deleteContactById(id)} sx={{ mr: '8px' }}>
                <IconButton aria-label="delete contact" color="error" size="large">
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            <Tooltip
                title="Edit"
                onClick={() => editContact(id)}
                className="button-edit">
                <IconButton aria-label="edit contact"  color="primary" className="button-edit">
                    <EditIcon className="button-edit"/>
                </IconButton>
            </Tooltip>
        </ListItemButton>
        <Divider variant="inset" component="div" key={`div${id}`} />
    </li>
};

export default ContactItem;