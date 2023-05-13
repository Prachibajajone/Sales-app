import mongoose from "mongoose";

const SaleSchema = new mongoose.Schema({
    productname : {
        type:String,
       
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    amount:{
        type:Number,
        require:true
    },

    

   

    
},{timestamps:true});


const SalesUserSales= mongoose.model('SalesUserSales',SaleSchema)

export default SalesUserSales