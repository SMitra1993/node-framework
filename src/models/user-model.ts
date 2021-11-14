import mongoose from 'mongoose';

// eslint-disable-next-line @typescript-eslint/naming-convention
const { Schema } = mongoose;
const userSchema = new Schema({
  userName: String, // String is shorthand for {type: String}
  firstName: String,
  lastName: String,
  emailId: String,
  phone: String,
  password: String,
  userId: String,
  address1: String,
  address2: String,
  city: String,
  pinCode: String,
  state: String,
});

// module.exports = {
//   user: mongoose.model('userdetails', userSchema),
// };

export const user =  mongoose.model('userdetails', userSchema)