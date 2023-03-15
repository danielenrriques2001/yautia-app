import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const UserSchema = new Schema({
  email: String,
  password: String,
});

// connecting through mongoose to cards collection in the database.
// it's not case sensitive

const User = mongoose.models.Users || mongoose.model("Users", UserSchema);
export default User;