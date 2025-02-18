import mongoose from "mongoose";

const departmentSchema= new mongoose.Schema({
    DepartmentName:{
        type:String,
        required:true
    },
})   

export default mongoose.model("Department", departmentSchema);