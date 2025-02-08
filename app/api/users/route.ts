import { db } from "@/lib/db";
import {hash} from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema validasi dengan Zod
const registerSchema = z.object({
    username: z.string().min(3, "Nama minimal 3 karakter"),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(6, "Password minimal 6 karakter"),
  });

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {  username, email, password } = registerSchema.parse(body);

        // Check if email already exists
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        });
        if (existingUserByEmail) {
            return NextResponse.json({
                user: null,
                message: "Email already exists",
            }, { status: 400 });
        }

        // Check if Username already exists
        const existingUserByUsername = await db.user.findUnique({
            where: { username: username }
        });
        if (existingUserByUsername) {
            return NextResponse.json({
                message: "Username already exists",
            }, { status: 400 });
        }

        //Password Hashing
        const hashPassword = await hash(password, 10);

        //Create new User
        const newUser = await db.user.create({
            data: {
                email,
                username,
                password: hashPassword,
            }
        })
        const { password: newUserPassword, ...rest }= newUser;

        return NextResponse.json({ user: rest, message: "user created successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Somenthing went wrong"}, { status: 500});
    }
}