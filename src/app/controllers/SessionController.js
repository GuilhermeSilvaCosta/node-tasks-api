import jwt from 'jsonwebtoken';
import User from '../models/User';

import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    if (!await User.exists({ email })) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const user = await User.findOne({ email });

    if (!await user.checkPassword(password)) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const {
      _id, name,
    } = user;

    return res.json({
      user: { _id, name, email },
      token: jwt.sign({ _id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
