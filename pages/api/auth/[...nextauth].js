
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { verifyPassword } from '../../../db/utils';
import dbConnect from '@/db/connect';
import User from '@/db/models/User';

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
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {

        await dbConnect();

        const user = await User.findOne({
          email: credentials.email
        });

        if (!user) {
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        await console.log(isValid)
        
        if (!isValid) {
          throw new Error('Could not log you in!');
        }

        return { email: user.email };
        
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET
});

export default NextAuth(authOptions)

