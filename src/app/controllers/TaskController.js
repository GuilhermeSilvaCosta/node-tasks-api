import Task from '../models/Task';

class TaskController {
  async index(req, res) {
    const tasks = await Task.find({
      owner: req.userId,
    }).lean();

    res.json(tasks);
  }

  async done(req, res) {
    const { _id } = req.params;

    await Task.updateOne({ _id }, { done: true });

    res.sendStatus(204);
  }

  async undone(req, res) {
    const { _id } = req.params;

    await Task.updateOne({ _id }, { done: false });

    res.sendStatus(204);
  }

  async store(req, res) {
    const { title } = req.body;

    const task = await Task.create({
      title,
      owner: req.userId,
    });

    res.status(201).json(task);
  }

  async update(req, res) {
    const { title } = req.body;
    const { _id } = req.params;

    if (!await Task.exists({ _id })) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    const task = await Task.findByIdAndUpdate(
      _id, { title }, { new: true, lean: true },
    );

    return res.json(task);
  }

  async delete(req, res) {
    const { _id } = req.params;

    await Task.deleteOne({ _id });

    res.sendStatus(204);
  }
}

export default new TaskController();
