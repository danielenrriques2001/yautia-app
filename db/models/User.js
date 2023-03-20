import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const UserSchema = new Schema({
  name:  String,
  email: String,
  password: String,
  appointments : [
    { type: Schema.Types.ObjectId, 
      ref: 'Appointment'
    }
  ],
});

// connecting through mongoose to cards collection in the database.
// it's not case sensitive


const User = mongoose.models.User || mongoose.model("User", UserSchema);


export default User;
