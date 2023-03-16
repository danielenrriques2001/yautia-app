import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const AppointmentSchema = new Schema({
  title: String,
  description: String, 
  date: String, 
  user: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
});



// connecting through mongoose to cards collection in the database.
// it's not case sensitive


const Appointment = mongoose.models.Appointments || mongoose.model("Appointments", AppointmentSchema);


export default Appointment;
