import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// eslint-disable-next-line func-names
UserSchema.pre('save', async function (next) {
  try {
    const passHash = await bcrypt.hash(this.password, 8);

    this.password = passHash;
    next();
  } catch (error) {
    next(error);
  }
});

// eslint-disable-next-line func-names
UserSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model('User', UserSchema);
