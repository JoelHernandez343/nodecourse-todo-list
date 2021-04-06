require('colors');

const { ask } = require('./common');

const showMenu = async () => {
  console.clear();
  console.log('-------------------------'.yellow.bgBlack);
  console.log('  Select an option');
  console.log('-------------------------'.yellow.bgBlack);

  console.log(`${'1.'.green} Create task.`);
  console.log(`${'2.'.green} List tasks.`);
  console.log(`${'3.'.green} List completed tasks.`);
  console.log(`${'4.'.green} List pending tasks.`);
  console.log(`${'5.'.green} Complete task.`);
  console.log(`${'6.'.green} Erase task.`);
  console.log(`${'0.'.green} Exit.`);

  return await ask('Select an option: ');
};

const pause = async () => await ask(`Press ${'ENTER'.green} to continue.`);

module.exports = {
  showMenu,
  pause,
};
