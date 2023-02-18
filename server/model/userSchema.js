import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true,
        min:4,
        max:20
    },
    lname:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
    }
});

const user=mongoose.model('user',userSchema);

export default user;