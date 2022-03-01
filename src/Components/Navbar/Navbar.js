import {React,useState} from 'react';

import {AppBar,Toolbar,IconButton,Drawer,Box,Typography,Stack,Avatar,Menu,MenuItem} from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';

// Custom Css
import "./Navbar.css";

const Navbar = () =>{
    // States

    const [Open,setOpen] = useState(false);
    const [menuAnchor,setMenuAnchor] = useState(null);
    return(
        <AppBar position="static">
            <Toolbar>
                {/* SideNav Starts*/}
                <IconButton onClick={()=> setOpen(prev => !prev)}>
                    <MenuIcon/>
                </IconButton>
                <Drawer anchor="left" open={Open}  onClose={()=> {
                    setOpen(prev => !prev);
                }}>
                    <Box sx={{minWidth:250,height:"100%"}}>
                        {/* SideNav Content */}
                    </Box>
                </Drawer>
                {/* SideNav Ends */}
               <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
               <Typography variant="h5">IOT</Typography>
                {/* <Typography variant="body1">IOT</Typography> 
                <Typography variant="body1">IOT</Typography> */}
               </Stack>
               <Stack sx={{width:"100%"}} direction="row" justifyContent="flex-end">
                   <IconButton onClick={(e) => setMenuAnchor(e.currentTarget)}>
                       <Avatar src="" alt="" />
                   </IconButton>
                   <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)}
                   onClose={()=> setMenuAnchor(null)}
                   >
                       <MenuItem>Profile</MenuItem>
                       <MenuItem>About</MenuItem>
                       <MenuItem>Logout</MenuItem>
                   </Menu>
               </Stack>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;