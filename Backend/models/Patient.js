import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  disease:{ 
    type: String,
    enum:[ "covid","dengu","allergy"],
  },
  condition: {
    type: String,
    enum:["critical", "normal"],
    default:"normal",
  },
  status:{ 
    type: String,
    enum: ["admitted","critical","normal", "recovered"],
    lowercase:true ,
    },
  admittedDate: Date,
  dischargedDate: Date,
});

export default mongoose.model("Patient", patientSchema);
