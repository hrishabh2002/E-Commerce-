
import { InputBase,Box,styled,List,ListItem} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getProducts } from "../../redux/action/productAction";
import { useEffect } from "react";
import {Link} from 'react-router-dom';

const SearchConatiner=styled(Box)`
background:#fff;
border-radius:2px;
width:38%;
margin-left:10px;
display:flex;
`

const InputSearchbase=styled(InputBase)`
padding-left:20px;
width:100%;
`

const Icon=styled(SearchIcon)`
padding:5px;
color:#2874f0;
`
const ListWrapper=styled(List)`
position:absolute;
background:#ffffff;
color:#000;
margin-top:36px;
`
const Search=()=>{
    
    const[text,setText]=useState('');

    const {products}=useSelector(state=>state.getProducts)
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
       
    },[dispatch]);


    const getText=(e)=>{
        setText(e);
    }
    return(
        <SearchConatiner>
         <InputSearchbase placeholder="Search for products,brand and more" 
         onChange={(e)=>getText(e.target.value)}
         value={text}/>
       <Icon>
        <SearchIcon/>
       </Icon>
       {
        text &&
        <ListWrapper>
            {products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                <ListItem>
                    <Link to={`/product/${product.id}`}
                     onClick={()=>setText('')}
                     style={{textDecoration:'none',color:'inherit'}}>
                        {product.title.longTitle}
                    </Link>
                </ListItem>
            ))
            }
        </ListWrapper>
       }
       </SearchConatiner>
    )
}

export default Search