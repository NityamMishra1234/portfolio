import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import User from "@/models/User";
import { connectDB } from "@/lib/db";



// export async function POST(req: Request){}

export async function POST (req: Request){
    await connectDB()
    const {email , password} = await req.json();

    const user = await User.findOne({email});
    if(!user) return NextResponse.json({sucess : false , message:"User Not found 404"},{status:404})
    const ismatched = await bcrypt.compare(password ,user.password);
    if(!ismatched) return NextResponse.json({sucess : false , message:"Password not matches!!!"},{status:400})
    const token = jwt.sign({userID: user._id , email : user.email }, process.env.JWT_SECRET!,{
        expiresIn: '7d',
    })
    const { password: _, ...userWithoutPassword } = user.toObject();
    
    return NextResponse.json({nessage : "Login sucessFull" ,token ,user: userWithoutPassword })
}