import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { error } from "console";

export async function POST(req: Request){
    await connectDB();
    const {email , password}= await req.json();
    console.log(process.env.CLOUDINARY_CLOUD_NAME); // should log the cloud name

    const existingUser = await User.findOne({email});
    if(existingUser){
        return NextResponse.json({error:"User already exists "},{status:401})
        // or we can make a change and send the proper responce but as we are using the signup using the post man we dont so this 
        // we can do that as NextResponse.json(
        //     {sucess : false , message :"user alweredy existes from the same email adress"},{status:401'}

        // )
         }
        const newUser = new User ({email , password});
        await newUser.save();
        return NextResponse.json({sucess:true , message :"Registration is sucessFull"})
        
}