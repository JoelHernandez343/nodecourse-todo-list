const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'Select an option',
    choices: [
      {
        value: 1,
        name: `${'1.'.bold.green} Create task`,
      },
      {
        value: 2,
        name: `${'2.'.bold.green} List tasks`,
      },
      {
        value: 3,
        name: `${'3.'.bold.green} List completed tasks`,
      },
      {
        value: 4,
        name: `${'4.'.bold.green} List pending tasks`,
      },
      {
        value: 5,
        name: `${'5.'.bold.green} Mark task as completed`,
      },
      {
        value: 6,
        name: `${'6.'.bold.green} Delete tasks`,
      },
      {
        value: 0,
        name: `${'7.'.bold.green} Exit`,
      },
    ],
  },
];

const inquireMenu = async () => {
  console.clear();
  console.log('----------------------------------'.yellow.bgBlack);
  console.log('       Node.js To-Do list         '.bold.white.bgBlack);
  console.log('----------------------------------\n'.yellow.bgBlack);

  const { option } = await inquirer.prompt(questions);

  return option;
};

const pause = async () =>
  await inquirer.prompt({
    name: '_',
    message: `Press ${'ENTER'.green} to continue.`,
  });

const ask = async message => {
  const { result } = await inquirer.prompt({
    type: 'input',
    name: 'result',
    message,
    validate(value) {
      if (value.length === 0) {
        return 'Enter a value.';
      }

      return true;
    },
  });

  return result;
};

const getTasksToDelete = async tasks => {
  const choices = tasks.map(({ id, description }, i) => ({
    value: id,
    name: `${`${i + 1}.`.green} ${description}`,
    checked: false,
  }));

  const { ids } = await inquirer.prompt({
    type: 'checkbox',
    name: 'ids',
    message: 'Mark tasks to delete them. Leave blank to cancel:',
    choices,
  });

  return ids;
};

const getTasksToggle = async tasks => {
  const choices = tasks.map(({ id, description, date }, i) => ({
    value: id,
    name: `${`${i + 1}.`.green} ${description}`,
    checked: !!date,
  }));

  const { ids } = await inquirer.prompt({
    type: 'checkbox',
    name: 'ids',
    message: 'Mark tasks as completed or unmark them to set pending:',
    choices,
  });

  return ids;
};

const confirm = async message => {
  const { ok } = await inquirer.prompt({
    type: 'confirm',
    name: 'ok',
    message,
  });

  return ok;
};

module.exports = {
  getTasksToDelete,
  getTasksToggle,
  inquireMenu,
  confirm,
  pause,
  ask,
};
