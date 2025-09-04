import { model, Schema } from "mongoose";

const schema=new Schema({
    Emp_name:{
        type:"String",
        required:true},
    Emp_email:{
        type:"String",
        required:true},
    Emp_position:{
        type:"String",
        required:true}
});

const Employee=model("Employee",schema);

export default Employee;