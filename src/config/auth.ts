import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { axios } from "./global";
import IUser from "@blog/domain/models/user";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Sign In",
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials): Promise<IUser> {
                try {
                    const response = await axios.get<IUser[]>(`users?email=${credentials?.email}`)
                    response.data[0]
                    if (response.data[0].password == credentials?.password)
                        return response.data[0]
                    else throw new Error('Invalid Password')
                } catch (error) {
                    throw error
                }
            },
        })
    ],

    callbacks: {
        async session({ session, token }) {
            session.user.id = Number(token.id)
            session.user.email = token.email
            session.user.firstName = String(token.firstName)
            session.user.lastName = String(token.lastName)
            return session
        },
        jwt({ token, trigger, user, session }) {
            if (user) {
                token.id = user.id
                token.firstName = user['firstName']
                token.lastName = user['lastName']
            }
            return token
        }
    }
};

export default authOptions
