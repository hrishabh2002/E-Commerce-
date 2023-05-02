import Product from "../model/ProductSchema.js"

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ id: id });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: `Product with ID ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// export const getProductById=async(request,response)=>{
//     console.log(request.params.id);
//     try{
//         const id= request.params.id;
//         const product=Product.findOne({'id':id});
//         response.status(200).json(product);
//     }catch(error){
//         response.status(500).json({message:error.message});
//     }
// }
