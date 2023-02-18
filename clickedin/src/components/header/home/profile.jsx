import { Typography,Box,Menu,MenuItem,styled} from "@mui/material"
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Components=styled(Menu)`
margin-top:5px;
`
const Logout=styled(Typography)`
margin-left:20px;
font-size:14px;
`
const Profile=({acc,setAcc})=>{

    const [open,setOpen]=useState(false);

    const handleClick=(event)=>{
        setOpen(event.currentTarget);
    }

    const handleClose=()=>{
        setOpen(false);
    }
    const LogoutUser=()=>{
        setAcc('');
    }
  
    return(
        <>
            <Box>
             <Typography onClick={handleClick} style={{marginTop:3,marginRight:50,cursor:'pointer'}}>{acc}</Typography>
            </Box>
            <Components
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}

      >
        <MenuItem onClick={handleClose}>
           <PowerSettingsNewIcon color="primary" fontSize="small"/>
            <Logout onClick={LogoutUser}>Logout</Logout>
        </MenuItem>
      </Components>
        </>
    )
}

export default Profile;