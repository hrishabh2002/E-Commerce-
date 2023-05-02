
import React from 'react'
import { useEffect,useState } from 'react';
import {Box,styled} from '@mui/material';

const Image=styled('img')({
    'height':'20rem'
})
const Container=styled(Box)`
display:flex;
overflow:hidden;
`
const ItemBox=styled(Box)`
padding:20px 30px;
text-align:center;
`
const Products=()=>{

    const [item,setItem]=useState([]);

    useEffect(()=>{
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setItem(json))
    },[])
   
    return(
        <div>
            <h3>Other Products</h3>
            <Container>
            
                {
                    
                    item.map(item=>(<ItemBox>
                        
                        <Image src={item.image} alt={item}/>
                        <p>{item.title}</p>
                        <p>₹{item.price*100}</p>
                        </ItemBox>
                    ))
                   
                }
            
            </Container>
        </div>
    )
}
export default Products;