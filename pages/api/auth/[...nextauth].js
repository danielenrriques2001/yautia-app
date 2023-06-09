
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google";
import { verifyPassword } from '../../../db/utils';
import dbConnect from '@/db/connect';
import User from '@/db/models/User';
import Appointment from '@/db/models/Appointment';

export const authOptions = ({
  session: {
    jwt: true,
  },
  providers: [
   Credentials({
    name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {

        await dbConnect();

        const user = await User.findOne({email: credentials.email})

        if (!user) {
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(credentials.password, user.password);
        
        if (!isValid) {
          throw new Error(`Your Password is'nt correct!`);
        }

        console.log('User blabla', user)


        return {name: user.name, email: user.email};
        
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET
});

export default NextAuth(authOptions)

