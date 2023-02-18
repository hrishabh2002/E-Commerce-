import { useState } from "react";
import {AppBar,Toolbar,styled,Box,Typography, IconButton,Drawer,List,ListItem} from "@mui/material";
import Search from "./Search";
import CustomButtoms from "./CustomButtons";
import { Link } from "react-router-dom";
import {Menu} from "@mui/icons-material";

const logoURL ='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

const StyledHeader=styled(AppBar)`
background:#2874f0;
height:55px;
`
const Component=styled(Link)`
margin-left:12%;
line-height:0;
color:inherit;
`
const SubHeading=styled(Typography)`
font-size:10px;
font-style:italic;
`
const PlusImage=styled('img')({
    width:10,
    height:10,
    marginLeft:4
})

const WrapperButtons=styled(Box)(({theme})=>({
    margin:'0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display:'none',
    }
}));

const MenuButton=styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block', 
    }
}));



const Header=()=>{

    const [open,setOpen]=useState(false);

    const handleOpen=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }

    return(
       <StyledHeader>
        <Toolbar style={{minHeight:'55px'}}>
            <MenuButton color="inherit" onClick={handleOpen}>
                <Menu/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose}>
                    <Box style={{width:'200px'}} onClick={handleClose}>
                    <List>
                        <ListItem button> 
                        <CustomButtoms/> 
                        </ListItem>
                    </List>
                    </Box>
            </Drawer>
            <Component to={`/`} style={{textDecoration:'none'}} >
                <img src={logoURL} alt="logo"  style={{width:75}}/>
                <Box style={{display:'flex'}}>
                    <SubHeading>Explore <Box component="span" style={{color:'#FFE500'}}>More</Box></SubHeading>
                    <PlusImage src={subURL} alt="sublogo" />
                </Box>
            </Component>
            
            <Search/>
            <WrapperButtons>
                <CustomButtoms/>
            </WrapperButtons>
        </Toolbar>
        </StyledHeader>
    )
}

export default Header;