import mongoose from "mongoose";

const adminSchema= new mongoose.Schema({
    _id: Number,
    UserName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    },

})   

export default mongoose.model("Admin", adminSchema);