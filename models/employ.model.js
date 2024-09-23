import mongoose, { mongo } from "mongoose";

const employSchema=new mongoose.Schema({
    empid:{type:String},
    name:{type:String},
    salary:{type:Number},
    experience:{type:String},
    designation:{type:String},
    phone:{type:Number},
    email:{type:String},
    profile:{type:String}
});
export default mongoose.model.Employs||mongoose.model("Employ",employSchema);