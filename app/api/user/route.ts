import {NextResponse} from "next/server";
import { connectMongoDB } from '@/app/lib/mongodb';
import User from '@/app/models/user';
import {getSession} from "next-auth/react";

export async function POST(request: Request) {
    const { email } = await request.json();
    try {
        await connectMongoDB();

        console.log(email);
        if (!email) {
            return NextResponse.json( {message: "Email is required"}, {status: 400});
        }

        let user = new User({ email: email });
        await user.save();

        return NextResponse.json({message: "User successfully created"}, {status: 200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error during user creation"}, {status: 300});
    }
}