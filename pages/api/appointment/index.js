import Appointment from "@/db/models/Appointment";
import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {  
    case 'POST':

      try {
        const user = await User.findOne({ email: req.body.user});
    
        const appointment = await Appointment.create({
          title: req.body.title, 
          description: req.body.description,
          date: req.body.date,
          user: user,
        })
        
        user.appointments.push(appointment)
        user.save();

        res.json({ message: 'Appointment created!' });


      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;
    
      case 'GET':

      try {


        const user = await User.find();

        res.status(200).json(user);


      } catch (error) {
        res.status(400).json({ success: false })
      }
      break




    default:
      res.status(400).json({ success: false })
      break
  }
}







