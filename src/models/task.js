require('colors');

const { v4: uuidv4 } = require('uuid');

class Task {
  constructor({ description, id = null, date = null }) {
    this.id = id ?? uuidv4();
    this.description = description;
    this.date = date;
  }

  pretty(index, showMark = true) {
    const i = `${index}.`.green;
    const mark = !showMark ? '' : ' :: ' + (this.date ? '✅' : '❌');
    const date = this.date ? this.date : '';

    return `  ${i} ${this.description} ${mark} ${date}`;
  }

  toggle(completed) {
    if (!!this.date === completed) {
      return;
    }

    this.date = completed ? new Date().toISOString() : null;
  }
}

module.exports = Task;
