import mongoose from "mongoose";

const connection=async(Password)=>{
//const URL=`mongodb://${Username}:${Password}@ac-xdxijhm-shard-00-00.s0fx2ft.mongodb.net:27017,ac-xdxijhm-shard-00-01.s0fx2ft.mongodb.net:27017,ac-xdxijhm-shard-00-02.s0fx2ft.mongodb.net:27017/PROJECT1?ssl=true&replicaSet=atlas-cy5mug-shard-0&authSource=admin&retryWrites=true&w=majority`;
const URL=`mongodb+srv://hrishabh:${Password}@ecommerce.s0fx2ft.mongodb.net/?retryWrites=true&w=majority`
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(URL,{useUnifiedTopology:true});
        console.log("Dtabase is connected")
    }catch(error){
        console.log('An error occured',error.message)
    }
}

export default connection; 
