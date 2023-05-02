import React from 'react'
import { useState,useContext} from 'react'
import {Dialog,Box, TextField, Typography, Button,styled} from "@mui/material"
import AuthenticateSignup from '../../../service/api'
import { DataContext } from '../../../context/dataProvider'
import { AuthenticateLogin } from '../../../service/api'


const Component=styled(Box)`
height:70vh;
width:90vh;
`
const Image=styled(Box)`
height:83%;
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
width:28%;
padding:45px 35px;
&>p,&>h5{
    color:#ffffff;
    font-weight:600;
}
`
const Wrapper=styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px; 
flex:1;
&>div,&>button,&>p{
    margin-top:10px;
}
`
const LoginButton=styled(Button)`
text-transfrom:none;
background:#fb641b;
color:#fff;
height:48px;
border-radius:2px;
`

const OtpButton=styled(Button)`
text-transfrom:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`
const Text=styled(Typography)`
font-size:12px;
color:#878787;
`
const Createtext=styled(Typography)`
font-size:12px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;
`
const Error=styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
`
function LoginDialog(props) {

const AccountinitialValues={
    login:{
        view:'login',
        heading:'Login',
        subheading:'Get access to your orders,wishlist and reccomendations'
        
    },
    sign:{
        view:'sign',
        heading:'Looks like you are new here!',
        subheading:'Signup with your mobile number to get started'
    }
}

const signupInitialValues={
    fname:'',
    lname:'',
    username:'',
    email:'',
    password:'',
    phone:''

}
const loginInitialValues={
    username:'',
    password:''
}

const {setAuthenticate}=useContext(DataContext)
const [signup,setSignup]=useState(signupInitialValues);
const [account,setAccount]=useState(AccountinitialValues.login);
const {setAcc}=useContext(DataContext);
const [login,setLogin]=useState(loginInitialValues);
const [error,setError]=useState(false);


    const handleClick=()=>{
        setAccount(AccountinitialValues.sign);
    }
    const handleClose=()=>{
        props.setOpen(false);
        setAccount(AccountinitialValues.login);
        setError(false);
    }

    const handleChange=(e)=>{
        setSignup({...signup,[e.target.name]: e.target.value})
    }

    const signupUser= async()=>{
        let response= await AuthenticateSignup(signup);
        if(!response)
        return;
        handleClose();
        setAuthenticate(true);
        setAcc(signup.username);
    }
    const handleVchange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});
    }

    const loginUser=async()=>{
        
       let response= await AuthenticateLogin(login);
       if(response.status===200){
        handleClose();
        setAuthenticate(true);
        setAcc(response.data.data.fname);
       }
       else{
        setAuthenticate(false)
            setError(true);
       }
    }

  return (

        <Dialog open={props.open} onClose={()=>handleClose()} PaperProps={{sx:{maxWidth:'unset'}}}>
            <Component>
                <Box style={{display:"flex",height:'100%'}}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{marginTop:20}}>{account.subheading}</Typography>
                    </Image>
                    { 
                    account.view==='login'?
                    <Wrapper>
                        
                        <TextField variant="standard" label="Enter username" name='username' onChange={(e)=>handleVchange(e)}/>
                        {error && <Error>Please enter valid credentials</Error>}
                        <TextField variant="standard" label="Password" name='password' onChange={(e)=>handleVchange(e)}/>
                        <Text>By continuing you agree to flipkarts tems of use and privacy</Text>
                        <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                        <Typography style={{textAlign:'center'}}>OR</Typography>
                        <OtpButton>Request OTP</OtpButton>
                        <Createtext onClick={()=>handleClick()}>New to flipkart? Create an account</Createtext>
                        
                    </Wrapper>
                    :
                    <Wrapper>
                        
                        <TextField variant="standard" label="Enter First name" name='fname' onChange={(e)=>handleChange(e)}/>
                        <TextField variant="standard" label="Enter Last name" name='lname' onChange={(e)=>handleChange(e)}/>
                        <TextField variant="standard" label="Enter User name" name='username' onChange={(e)=>handleChange(e)}/>
                        <TextField variant="standard" label="Enter Email" name='email' onChange={(e)=>handleChange(e)} />
                        <TextField variant="standard" label="Enter Password" name='password' onChange={(e)=>handleChange(e)}/>
                        <TextField variant="standard" label="Enter Phone number" name='phone' onChange={(e)=>handleChange(e)}/>
                        <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                        
                    </Wrapper>
                    }
                </Box>     
            </Component>
         </Dialog>
    
  )
}

export default LoginDialog;