require('colors');

const { v4: uuidv4 } = require('uuid');

class Task {
  constructor({ description, id = null, date = null }) {
    this.id = id ?? uuidv4();
    this.description = description;
    this.date = date;
  }

  pretty(index, showMark = true) {
    return `  ${`${index}.`.green} ${this.description} ${
      !showMark ? '' : this.date ? ':: ✅' : ':: ❌'
    }`;
  }
}

module.exports = Task;
