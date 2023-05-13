import SalesUser from "../Models/user-schema.js";
import SalesUserSales from "../Models/sales-schema.js";


const addsales=async(req,res)=>{
console.log('addsales')
const { productname, quantity, amount } = req.body;
console.log( productname, quantity, amount)
if(!productname || !quantity || ! amount){

    return res.status(404).json({msg:'empty values not allowed.'})
}
try {

    const sale = await new SalesUserSales({ productname:productname, quantity: parseInt(quantity), amount: parseInt(amount)  }).save();
    
    res.json({ message: 'Sale added Successfully' })
} catch (error) {
    console.log(error)
}
}


const gettopfivesales=async(req,res)=>{
    const salesFromToday = await SalesUserSales.find({}).sort({amount:'desc'}).limit(5) 



    res.send({ salesFromToday });
}



const getTotalAmount = async (req, res) => {
    try {
      const totalAmount = await SalesUserSales.aggregate([
        {
          $group: {
            _id: null, // group all documents together
            total: { $sum: "$amount" } // calculate the sum of the amount field
          }
        }
      ]);
  
      res.json({ totalAmount: totalAmount[0].total }); // return the sum as JSON
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error getting total amount.' });
    }
  };

export {addsales,gettopfivesales,getTotalAmount}