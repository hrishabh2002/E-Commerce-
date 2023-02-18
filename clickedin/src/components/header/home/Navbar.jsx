
import { navData } from "../../../constants/Data";
import {Box,styled, Typography} from "@mui/material";

const Component=styled(Box)(({theme})=>({
display:'flex',
margin:'55px 130px 0 130px',
justifyContent:'space-between',
overflow:'hidden',
[theme.breakpoints.down('lg')]:{
margin:0
}
}));

const Container=styled(Box)`
padding:12px 8px;
line-height:0;
text-align:center;
`
const Text=styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`
const Navbar=()=>{
    return(
        <Box style={{background:'#fff'}}>
        <Component>{
            navData.map(data => (
                <Container>
                    <img src={data.url} alt="navdata" style={{width:64}} key={data.id}/>
                    <Text>{data.text}</Text>
                </Container>
            ))
            }
        </Component>
        </Box>
    )
}
export default Navbar;