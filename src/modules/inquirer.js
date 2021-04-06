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
        name: '1. Create task',
      },
      {
        value: 2,
        name: '2. List tasks',
      },
      {
        value: 3,
        name: '3. List completed tasks',
      },
      {
        value: 4,
        name: '4. List pending tasks',
      },
      {
        value: 5,
        name: '5. Mark task as completed',
      },
      {
        value: 6,
        name: '6. Erase task',
      },
      {
        value: 0,
        name: '0. Exit',
      },
    ],
  },
];

const inquireMenu = async () => {
  console.clear();
  console.log('----------------------------------'.yellow.bgBlack);
  console.log('        Kernel module app         '.bgBlack);
  console.log('----------------------------------\n'.yellow.bgBlack);

  return await inquirer.prompt(questions);
};

const pause = async () =>
  await inquirer.prompt({
    name: '_',
    message: `Press ${'ENTER'.green} to continue.`,
  });

module.exports = {
  inquireMenu,
  pause,
};
