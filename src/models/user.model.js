import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        index:true,
        trim:true
    },
    email:{
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullName:{
        required:true,
        lowercase:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String, //claudinary
        required:true,
    },
    coverImage:{
        type:String, //claudinary
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video" 
        }
    ],
    password:{
        type:String,
        required:[true,"password is required"]
    },
    refreshToken:{
        type:String,
    }
},

{timestamps:true});

export const User=mongoose.model.apply("User",userSchema);