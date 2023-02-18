
import {Box, Button,styled} from "@mui/material";
import {ShoppingCart as Cart,FlashOn as Flash} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../redux/action/cartAction";


const LeftContainer=styled(Box)(({theme})=>({
    minWidth:'40%',
    padding:'40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
        padding:'20px 40px'
    }
}));

const Image=styled('img')({
   padding:'10px',
   width:'90%'
})
const StyledButton=styled(Button)(({theme})=>({
    width:'48%',
    height:'50px',
    borderRadius:'2px',
    [theme.breakpoints.down('lg')]:{
        width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48%'
    }

}))

const ActionItem=({product})=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {id}=product;

    const [quantity,setQuantity]=useState(1);

    const addItemToCart=()=>{
        dispatch(addToCart(id,quantity));
        navigate('/cart');
    }
    const buyNow=()=>{
     
    }
    return(
        <LeftContainer>
            <Box style={{ padding:"15px 20px",border:"1px solid #f0f0f0"}}>
            <Image src={product.detailUrl} alt="product" />
            </Box>
            <StyledButton onClick={()=>addItemToCart()} variant="contained" style={{marginRight:10,background:'#ff9f00'}}><Cart/>Add to Cart</StyledButton>
            <StyledButton onClick={()=>buyNow()} variant="contained" style={{background:'#fb541b'}}><Flash/>Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;