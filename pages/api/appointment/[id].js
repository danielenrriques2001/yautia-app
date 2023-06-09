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

        const user = await User.findOne({email: id});
 
        const appointments = await Appointment.find({user: user });

        res.status(200).json(appointments)


      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;


      case 'DELETE':

      try {

        const appointment = await Appointment.findOneAndRemove(id);
        const user = await User.findOneAndUpdate({_id: appointment.user}, { $pull: { 'appointments': id }});
        
        user.save();

        if (!appointment) {
          return res.status(404).json({ status: "Not Found" });
        }

    
        res.status(200).json({status: 'Successfully Deleted'});



      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;

      case 'PATCH':

      console.log('This is the USER', req.body)

      const appointment = await Appointment.findByIdAndUpdate(id, req.body );


    
  
      if (!appointment) {
        
        return res.status(404).json({ status: "Not Updated" });
      }
  
      return res.status(200).json({status: 'Successfully Updated'});

      break; 
  
    
      
    default:
      return res.status(400).json({ success: false })
      break
  }
}
