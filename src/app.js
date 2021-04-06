require('colors');

const { showMenu, pause } = require('./modules/messages');

const app = async () => {
  console.clear();

  let opt = '';
  do {
    opt = await showMenu();
  } while (opt !== '0');

  pause();
};

module.exports = app;
