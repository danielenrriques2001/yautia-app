import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const ExpenseSchema = new Schema({
  name: String,
  cost: String, 
  category: String, 
  date: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});



// connecting through mongoose to cards collection in the database.
// it's not case sensitive


const Expense = mongoose.models.Expense || mongoose.model("Expense", ExpenseSchema);

export default Expense;
