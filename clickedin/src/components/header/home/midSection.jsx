import { imageURL } from "../../../constants/Data";
import {Grid,styled} from '@mui/material';

const Component=styled(Grid)`
margin-top:10px;
justify-content:space-between;
`
const Image=styled('img')(({theme})=>
    ({
        marginTop:10,
        display:'flex',
        width:'100%',
        justifyContent:'space-between',
        [theme.breakpoints.down('md')]:{
            objectFit:'cover',
            height:120
        }
    }));

const MidSection=()=>{
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return(
        <>
        
        <Grid container lg={12} md={12} sm={12} xs={12}>
            {
                imageURL.map(image=>(
                 
                    <Component item lg={4} md={4} sm={12} xs={12}>
                    <img src={image} alt="imag" style={{width:'100%'}}/>
                    </Component>
                ))
            }
        </Grid>
        <Image src={url} alt="img" />
        </>
    )
}
export default MidSection;