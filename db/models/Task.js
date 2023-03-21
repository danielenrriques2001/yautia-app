import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const TaskSchema = new Schema({
  name: String,
  description: String, 
  date: String, 
  completed: Boolean,
  category: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

// connecting through mongoose to cards collection in the database.
// it's not case sensitive


const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);

export default Task;
