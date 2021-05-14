import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnections = mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
    );
  }
}

export default new Database();
