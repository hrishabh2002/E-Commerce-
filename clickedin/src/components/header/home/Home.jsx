
import Navbar from "./Navbar";
import Banner from "./Banner";
import {Box,styled} from "@mui/material";
import { getProducts } from "../../../redux/action/productAction";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import Slide from "./slide";
import MidSlide from './midSlide';
import MidSection from "./midSection";
import { useState } from "react";
import Products from "../../products";

const Container=styled(Box)`
background:#f2f2f2;
padding:10px;
`

const Home=()=>{

    const { products }=useSelector(state=>state.getProducts); 
    
  
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    return(
        <Box>
            <Navbar/>
            <Container>
              <Banner/>
              <MidSlide product={products} title="Deal of the day" timer={true}/>
              <MidSection/>
              <Products />
              <Slide product={products} title="Discount for you" timer={false}/>
              <Slide product={products} title="Suggesting items" timer={false}/>
              <Slide product={products} title="Top selections" timer={false}/>
              <Slide product={products} title="Reccommended items" timer={false}/>
              <Slide product={products} title="Trending offers" timer={false}/>
              <Slide product={products} title="Seasons's top picks" timer={false}/>
            </Container>
            
        </Box>

        
    )
}
export default Home;
