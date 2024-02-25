// Importing necessary modules and types
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectMongoDB } from "@/app/lib/mongodb";
import User from "../../../models/user";

// Ensuring environment variables are correctly typed
const clientId: string = process.env.GOOGLE_CLIENT_ID || "";
const clientSecret: string = process.env.GOOGLE_CLIENT_SECRET || "";

const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId,
            clientSecret,
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            // Check if 'account' is not null before proceeding
            if (account && account.provider === "google") {
                const email  = user.email;
                try {
                    await connectMongoDB();
                    const userExists = await User.findOne({ email: email });

                    if (!userExists) {
                        console.log(email);
                        const res = await fetch("http://localhost:3000/api/user", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                email: email,
                            }),
                        });

                        if (res.ok) {
                            console.log("OK");
                            return true;
                        }
                    }
                } catch (error) {
                    console.log("ERROR");
                    console.error(error);
                    return false;
                }
            }
            console.log("account is null");
            // If 'account' is null, or for any other provider, you might want to handle it differently.
            // For simplicity, this example returns true.
            return true;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
