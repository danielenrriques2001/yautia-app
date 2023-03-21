import Expense from "@/db/models/Expense";
import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler (req, res) {
  const { method } = req

  console.log(req.body)
  await dbConnect()

  switch (method) {  
    case 'POST':

      try {
        const user = await User.findOne({ email: req.body.user});
    
        const expense = await Expense.create({
          name: req.body.name, 
          cost: req.body.cost,
          date: req.body.date,
          category: req.body.category,
          user: user,
        })
        

        res.json({ message: 'Expense created!' });


      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;

      
    default:
      res.status(400).json({ success: false })
      break
  }
}