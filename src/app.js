require('colors');

const { inquireMenu, pause } = require('./modules/inquirer');

const app = async () => {
  console.clear();

  let option = '';
  do {
    ({ option } = await inquireMenu());
    console.log(option);
    await pause();
  } while (option !== 0);
};

module.exports = app;
