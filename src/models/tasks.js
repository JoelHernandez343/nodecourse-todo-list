const { save, read } = require('../modules/file');
const Task = require('./task');

class Tasks {
  constructor() {
    this._list = {};
    this.load();
  }

  createTask(description = '') {
    const task = new Task({ description });
    this._list[task.id] = task;

    this.save();
  }

  deleteTasks(ids = []) {
    ids.forEach(id => {
      if (this._list[id]) {
        delete this._list[id];
      }
    });

    this.save();
  }

  toggleTasks(ids = []) {
    this.list().forEach(task => task.toggle(ids.includes(task.id)));

    this.save();
  }

  list(filter = 'all') {
    return Object.values(this._list).filter(task => {
      if (filter === 'all') {
        return true;
      }

      return filter === 'completed' ? task.date : !task.date;
    });
  }

  pretty(filter = 'all') {
    return this.list(filter).map((task, i) =>
      task.pretty(i + 1, filter === 'all')
    );
  }

  save() {
    save(JSON.stringify(this.list()));
  }

  load() {
    const array = JSON.parse(read()) ?? [];

    array.forEach(task => (this._list[task.id] = new Task(task)));
  }
}

module.exports = Tasks;
