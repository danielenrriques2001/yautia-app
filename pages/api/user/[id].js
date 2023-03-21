import dbConnect from "@/db/connect";
import User from "@/db/models/User";

import Appointment from "@/db/models/Appointment";
import mongoose from "mongoose";

export default async function handler (req, res) {
  const { method } = req

  const { id } = req.query

  console.log('id', id)

  await dbConnect()

  switch (method) {  


      case 'GET':

      try {

        const user = await User.findOne({email: id}, 'budget');

        console.log(
          'This is the User Info',
          user
        )

        res.status(200).json(user.budget)


      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;


      case 'PATCH':

      console.log('This is the user INFO BEFORE THE PATCh', req.body, id)

      const user = await User.findOneAndUpdate({email: id}, {budget: req.body});


      return 
      if (!user) {
        
        return res.status(404).json({ status: "Not Updated" });
      }
  
      return res.status(200).json({status: 'Budget successfully Added!'});

      break; 
  
    
      
    default:
      return res.status(400).json({ success: false })
      break
  }
}