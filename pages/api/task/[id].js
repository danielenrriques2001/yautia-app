import dbConnect from "@/db/connect";
import Task from "@/db/models/Task";
import User from "@/db/models/User";
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
 
        const tasks = await Task.find({user: user });

        res.status(200).json(tasks)


      } catch (error) {
        res.status(400).json({ success: false })
      }



      break;


      case 'DELETE':

      try {

        const task = await Task.findOneAndRemove(id);


        if (!task) {
          return res.status(404).json({ status: "Not Found" });
        }

    
        res.status(200).json({status: 'Successfully Deleted'});



      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;

      case 'PATCH':

      console.log('Im inside PATCH', id)

      const task = await Task.findByIdAndUpdate(id, req.body );

      if (!task) {
        
        return res.status(404).json({ status: "Not Updated" });
      }
  
      return res.status(200).json({status: 'Successfully Updated'});

      break; 
  
    
      
    default:
      return res.status(400).json({ success: false })
      break
  }
}
