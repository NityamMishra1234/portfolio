import mongoose ,{ Schema,Document}from "mongoose"
import bcrypt from "bcryptjs"

export interface IUser extends Document{
    email: string;
    password:string;
}

const UserSchema = new Schema <IUser>({
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required :true,
    }
})

UserSchema.pre('save' , async function (next){
    if (!this.isModified('password')) return next;
    this.password = await bcrypt.hash(this.password ,10)
    next()
});

export default mongoose.models.User || mongoose.model<IUser>( 'User' , UserSchema);