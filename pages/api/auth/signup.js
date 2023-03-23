import { hashPassword } from "@/db/utils";
import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler(req, res) {


    await dbConnect();
  
    if (req.method !== 'POST') {
      return;
    }
  
    const data = req.body;
  
    const {name, email, password } = data;

    console.log('NAME FROM BAKEND', name)
  
    if (!name ||!email || !email.includes('@') || !password ||password.trim().length < 7) {
      res.status(422).json({
        message:
          'Invalid input - password should also be at least 7 characters long.',
      });
      return;
    }


    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
        res.status(402).json({ message: 'User exists already!' });
        return;
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
        name: name, 
        email: email,
        password: hashedPassword,
        
    });

  

    res.status(201).json(user);


}  