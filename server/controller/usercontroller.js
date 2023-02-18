

import User from "../model/userSchema.js";

const UserSign=async(req,res)=>{
  try{

      const exist=await User.findOne({username:req.body.username});
      if(exist)
       return res.status(401).json({message:'user already exist'});

    const user=req.body;
    const newUser=new User(user);
    await newUser.save();
    res.status(200).json({message:user})
  }catch(error){
      res.status(500).json({message:error.message});
  }
}

 const UserLogin=async(request,response)=>{
  try{
     const username=request.body.username;
     const password=request.body.password;

     let user= await User.findOne({username:username,password:password});
     if(user){
      return response.status(200).json({data:user});
     }
     else{
      return response.status(401).json(`Invalid login`);
     }
  }catch(error){
      response.status(500).json(`There is an error`,error.message);
  }
}


export {UserSign,UserLogin};