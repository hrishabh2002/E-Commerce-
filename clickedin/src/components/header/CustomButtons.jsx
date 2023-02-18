//material ui imports
import {Box,styled,Button,Typography, Badge} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Profile from "./home/profile";
import { useState,useContext } from "react";
import { DataContext } from "../../context/dataProvider";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

//components import
import LoginDialog from "./login/LoginDialog";


const ButtonsConatiner=styled(Box)(({theme})=>({
    display:'flex',
    margin:'0 3% 0 auto',
    '&>Button,&>p,&div':{
    marginRight:45,
    fontSize:16,
    alignItems:'center'
},
[theme.breakpoints.down('md')]:{
    display:'block'
}
}));

const CartConatiner=styled(Link)(({theme})=>({
    display:'flex',
    color:'inherit',
    textDecoration:'none',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));


const LoginButton=styled(Button)`
color:#2874f0;
background:#fff;
text-transform:none;
padding:5px 20px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px
`
const CustomButtoms=()=>{

    const[open,setOpen]=useState(false);

    const{acc,setAcc}=useContext(DataContext);

    const {cartItems}=useSelector(state=>state.cart);

    const handleClick=()=>{
        setOpen(true);
    }

    return(
        <ButtonsConatiner>
            {
                acc? <Profile acc={acc} setAcc={setAcc}/> :
                <LoginButton variant="contained" onClick={()=>handleClick()}>Login</LoginButton>
            }
           
           <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
           <Typography style={{marginTop:3}}>More</Typography>
           <CartConatiner to="/cart"> 
           <Badge badgeContent={cartItems?.length} color='secondary'>
                <ShoppingCartIcon/>
            </Badge>
            <Typography style={{marginLeft:10}}>Cart</Typography>
           </CartConatiner>
           <LoginDialog open={open} setOpen={setOpen}/>
        </ButtonsConatiner>
    )
}
export default CustomButtoms;