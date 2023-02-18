
import { products } from "./database/data.js";
import Product from "./model/ProductSchema.js";

const DefaultData= async()=>{
    try{
//         await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("Products has been inserted to database");
    }catch(error){
        console.log("An eror occured at default data",error.message);
    }
}

export default DefaultData;
