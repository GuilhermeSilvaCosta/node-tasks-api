import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: String,
  done: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'users',
  },
}, { timestamps: true });

export default mongoose.model('Task', TaskSchema);
