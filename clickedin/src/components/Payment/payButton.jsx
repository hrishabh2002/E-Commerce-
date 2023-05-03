import axios from 'axios';
import {Button,styled} from '@mui/material'
import { useContext } from 'react';
import { DataContext } from '../../context/dataProvider';
import { URL } from '../../Url';


const Url=URL;
const StyledButton=styled(Button)`
display:flex;
margin-left:auto;
color:#fff;
background-color:#fb641b;
width:250px;
height:51px;
border-radius:2px;
`
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

const PayButton=(props)=>{

    const {authenticate}=useContext(DataContext);  

    const handleClick=()=>{
        axios.post(`${Url}/stripe/create-checkout-session`,
            props).then((res)=>{
            if(res.data.url){
                window.location.href=res.data.url;
            }
        }).catch((e)=>{
            console.log(e.message);
        })
    }

    return(
        <>
        {
            authenticate?
            <StyledButton onClick={()=>handleClick()}>Check out</StyledButton>
            :
            <LoginButton>Login To Proceed</LoginButton>
        }
       
       </>
    )
}

export default PayButton;