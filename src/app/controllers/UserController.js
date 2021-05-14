import User from '../models/User';

class UserController {
  async store(req, res) {
    if (await User.exists({ email: req.body.email })) { return res.status(400).json({ error: 'User already exists.' }); }

    const user = await User.create(req.body);

    const {
      _id, name, email,
    } = user;

    return res.json({
      _id, name, email,
    });
  }
}

export default new UserController();
