import Expense from "@/db/models/Expense";
import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import Task from "@/db/models/Task";
export default async function handler (req, res) {
  const { method } = req

  console.log(req.body)
  await dbConnect()

  switch (method) {  
    case 'POST':

      try {
        const user = await User.findOne({ email: req.body.user});
    
        const expense = await Task.create({
          name: req.body.name, 
          description: req.body.description,
          date: req.body.date,
          category: req.body.category,
          completed: req.body.completed,
          user: user,
        })
        

        res.json({ message: 'Task created!' });


      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;

      
    default:
      res.status(400).json({ success: false })
      break
  }
}