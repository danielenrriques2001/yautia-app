import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const AppointmentSchema = new Schema({
  title: String,
  description: String, 
  date: String, 
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});



// connecting through mongoose to cards collection in the database.
// it's not case sensitive


const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema);

export default Appointment;
