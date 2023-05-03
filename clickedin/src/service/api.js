
import axios from "axios";
import { URL } from "../Url";

export const AuthenticateSignup= async(data)=>{

    try{
        return await axios.post(`${URL}/signup/`,data);
    }catch(error){
        console.log("error occured in authentication signup api",error);
    }
}

export const AuthenticateLogin= async(data)=>{

    try{
        return await axios.post(`${URL}/login/`,data);
    }catch(error){
        console.log("error occured in authentication login api",error.response);
        return error.response;
    }
}

export const payUsingPaytm=async(data)=>{

    try{
        let response= await axios.post(`${URL}/payment/`,data);
        return response.data;
    }catch(error){
        console.log("Error while payment",error)
    }
}

export default AuthenticateSignup;