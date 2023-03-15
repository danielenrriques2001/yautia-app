import { hashPassword } from "@/db/utils";
import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler(req, res) {


    await dbConnect();
  
    if (req.method !== 'POST') {
      return;
    }
  
    const data = req.body;
  
    const { email, password } = data;
  
    if (!email || !email.includes('@') || !password ||password.trim().length < 7) {
      res.status(422).json({
        message:
          'Invalid input - password should also be at least 7 characters long.',
      });
      return;
    }


    const existingUser = await User.findOne({ email: email });

    console.log(existingUser)
    if (existingUser) {
        res.status(422).json({ message: 'User exists already!' });
        return;
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
        email: email,
        password: hashedPassword,
    });

    res.status(201).json(user);


}  