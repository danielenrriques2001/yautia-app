import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import mongoose from "mongoose";
import Expense from "@/db/models/Expense";

export default async function handler (req, res) {
  const { method } = req

  const { id } = req.query

  console.log('id', id)

  await dbConnect()

  switch (method) {  

      case 'GET':

      try {

        const user = await User.findOne({email: id});
 
        const expenses = await Expense.find({user: user });

        res.status(200).json(expenses)


      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;


      case 'DELETE':

      try {

        const expense = await Expense.findOneAndRemove(id);
       
 
        console.log('Im inside Delete')

        if (!expense) {
          return res.status(404).json({ status: "Not Found" });
        }

    
        res.status(200).json({status: 'Successfully Deleted'});

      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;

      case 'PATCH':

      const expense = await Expense.findByIdAndUpdate(id, req.body );

      if (!expense) {
        
        return res.status(404).json({ status: "Not Updated" });
      }
  
      return res.status(200).json({status: 'Successfully Updated'});

      break; 
  
    
      
    default:
      return res.status(400).json({ success: false })
      break
  }
}
