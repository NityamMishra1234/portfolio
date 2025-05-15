// import mongoose from 'mongoose';

// let isConnected: boolean = false;

// export const connectDB = async (): Promise<void> => {
//   if (isConnected) return;

//   try {
//     await mongoose.connect(process.env.MONGO_URI as string);
//     isConnected = true;
//     console.log('🟢 MongoDB connected');
//   } catch (err) {
//     console.error('🔴 MongoDB connection error:', err);
//     throw err;
//   }
// };


import mongoose from 'mongoose';
let isConnected: boolean = false;

export const connectDB = async ():Promise <void>=>{
    if(isConnected) return;
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        // console.log(process.env.MONGO_URI)
        isConnected = true
        console.log("🟢  DBconnected!!!");
    } catch (error) {
        console.error("🔴 MongoDB connection error:", error)
    }
}