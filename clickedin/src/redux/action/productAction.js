import axios from "axios";
import { GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAIL,GET_PRODUCT_DETAILS_REQUEST,GET_PRODUCT_DETAILS_FAIL,
GET_PRODUCT_DETAILS_SUCCESS } from "../constant/productConstant";
import { URL } from "../../Url";

// const URL='http://localhost:8000'
export const getProducts= ()=>async(dispatch)=>{
    try{
        const {data}= await axios.get(`${URL}/products`);
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:data})
    }catch(error){
        console.log("Error while get product api",error.message)
        dispatch({type:GET_PRODUCTS_FAIL,payload:error.message})
    }
}

export const getProductDetails=(id)=>async(dispatch)=>{
        try{
            dispatch({type:GET_PRODUCT_DETAILS_REQUEST});
            const {data}= await axios.get(`${URL}/product/${id}`);
            dispatch({type:GET_PRODUCT_DETAILS_SUCCESS,payload:data})
        }catch(error){
            dispatch({type:GET_PRODUCT_DETAILS_FAIL,payload:error.message})
            console.log(error.message);
        }

}