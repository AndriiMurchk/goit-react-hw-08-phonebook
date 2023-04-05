import { ListItemButton, ListItemIcon, Skeleton } from "@mui/material";

const ContactsSceleton = () => {
    return (<>
        <ListItemButton component="div">
            <ListItemIcon><Skeleton variant="circular" width={40} height={40} animation="wave" /></ListItemIcon>
            <Skeleton variant="text" width={376} sx={{ fontSize: '16px' }} animation="wave" />
        </ListItemButton>
        <ListItemButton component="div">
            <ListItemIcon><Skeleton variant="circular" width={40} height={40} animation="wave" /></ListItemIcon>
            <Skeleton variant="text" width={376} sx={{ fontSize: '16px' }} animation="wave" />
        </ListItemButton>
        <ListItemButton component="div">
            <ListItemIcon><Skeleton variant="circular" width={40} height={40} animation="wave" /></ListItemIcon>
            <Skeleton variant="text" width={376} sx={{ fontSize: '16px' }} animation="wave" />
        </ListItemButton>
        <ListItemButton component="div">
            <ListItemIcon><Skeleton variant="circular" width={40} height={40} animation="wave" /></ListItemIcon>
            <Skeleton variant="text" width={376} sx={{ fontSize: '16px' }} animation="wave" />
        </ListItemButton>
        <ListItemButton component="div">
            <ListItemIcon><Skeleton variant="circular" width={40} height={40} animation="wave" /></ListItemIcon>
            <Skeleton variant="text" width={376} sx={{ fontSize: '16px' }} animation="wave" />
        </ListItemButton>
        <ListItemButton component="div">
            <ListItemIcon><Skeleton variant="circular" width={40} height={40} animation="wave" /></ListItemIcon>
            <Skeleton variant="text" width={376} sx={{ fontSize: '16px' }} animation="wave" />
        </ListItemButton>
    </>
    )
};

export default ContactsSceleton;