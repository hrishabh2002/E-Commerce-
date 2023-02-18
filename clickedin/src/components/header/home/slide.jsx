import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography,Button,Divider,styled} from "@mui/material";
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";


const Component=styled(Box)`
margin-top:10px;
background-color:white;
`
const Deal=styled(Box)`
padding:15px 20px;
display:flex;
`
const Timer=styled(Box)`
display:flex;
margin-left:10px;
align-item:center;
color:#787878; 
`
const Dealtext=styled(Typography)`
font-size:22px;
font-weight:600;
margin-right:25px;
line-height:32px;
`
const Viewbutton=styled(Button)`
margin-left:auto;
background-color:#2874f0;
border-radius:2px;
font-size:13px;
font-weight:600; 
`
const Image=styled('img')({
    height:125,
   width:'auto'
})
const Text=styled(Typography)`
font-size:14;
margin-top:5px
`

const responsive = {
   
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Slide=({product,title,timer})=>{

    const renderer=({hours,minutes,seconds})=>{
        return <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>
    } 
    return(
        <Component>
            <Deal>
                <Dealtext>{title}</Dealtext>
                {
                    timer&&
                    <Timer>
                        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg" alt="clock" style={{width:24}} />
                        <Countdown date={Date.now()+5.04e+7} renderer={renderer}/>
                    </Timer>
                }
                
                <Viewbutton variant="contained" color="primary">View all</Viewbutton>
            </Deal>
            <Divider/>
        <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
         autoPlay={true}
         autoPlaySpeed={4000}
         keyBoardControl={true}
         centerMode={true}
         containerClass="carousel-container"
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px"
         >
            {
               product.map(product=>(
                <Link to={`/product/${product.id}`} style={{textDecoration:'none'}}>
                <Box textAlign="center" style={{padding:"25px 15px"}}>
                <Image src={product.url} alt="prod" key={product.id} />
                <Text style={{fontWeight:600,color:'#212121'}}>{product.title.shortTitle}</Text>
                <Text style={{color:'green'}}>{product.discount}</Text>
                <Text style={{color:'#212121',opacity:'0.6'}}>{product.tagline}</Text>
                </Box>
                </Link>
               ))
            }
        </Carousel>
        </Component>
    )
}

export default Slide;
