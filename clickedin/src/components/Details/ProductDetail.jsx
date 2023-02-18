
import { Typography,Box,styled,Table,TableBody,TableRow,TableCell} from "@mui/material";
import {LocalOffer as Batch} from '@mui/icons-material';


const SmallText=styled(Box)`
vertical-align:baseline;
&>p{
    font-size:14px;
    margin-top:10px;
}
`
const StyleBatch=styled(Batch)`
margin-right:10px;
color:#00cc00;
font-size:15px;
`
const Coltext=styled(TableRow)`
font-size:14px;
&>td{
    vertical-align:baseline;
    font-size:14px; 
    margin-top:10px;
    border:none;
}
`
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

const ProductDetails=({product})=>{
    const date=new Date(new Date().getTime()+(5*24*60*60*1000));

    return(
        <>
             <Typography>{product.title.longTitle}</Typography>
                    <Typography style={{marginTop:'5px',color:'#878787',fontSize:'14'}}>
                        8 Ratings & 1 review
                       <Box component="span"> <img src={fassured} alt="fassured" style={{marginLeft:20,width:77}} /></Box>
                       </Typography>
                       <Typography>
                        <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                        <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                        <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>
                       </Typography>
             <Typography>Available offers</Typography>
             <SmallText>
                <Typography><StyleBatch/>Get extra 20% off uto 50 on 1 item(s) T&C</Typography>
                <Typography><StyleBatch/>Get extra 13% off (price inclusive of discount) T&C</Typography>
                <Typography><StyleBatch/>Sign up for Flipkart pay later and get flipkart giftcard worth 100* Know more</Typography>
                <Typography><StyleBatch/>By 2 items save 5%;Buy 3 or more save 10% T&C</Typography>
                <Typography><StyleBatch/>5% cashabck on flipkart axis bank card</Typography>
                <Typography><StyleBatch/>No cost EMI on Bajaj finsery EMI card on cart value above 2999 T&C</Typography>
             </SmallText>
            <Table>
                <TableBody>
                    <Coltext>
                        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </Coltext>
                    <Coltext>
                        <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                        <TableCell>No warranty</TableCell>
                    </Coltext>
                    <Coltext>
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style={{color:'#2874f0'}}>SuperComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </Coltext>
                    <Coltext>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt="flipcoins" style={{width:390}} />
                        </TableCell>
                        
                    </Coltext>
                    <Coltext>
                        <TableCell style={{color:'#878787'}}>Discription</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </Coltext>
                </TableBody>
            </Table>
        </>
    )
}
export default ProductDetails;