require('colors');

const Tasks = require('./models/tasks');
const {
  getTaskToDelete,
  getTasksToggle,
  inquireMenu,
  confirm,
  pause,
  ask,
} = require('./modules/inquirer');

const tasks = new Tasks();

const app = async () => {
  console.clear();

  let option = '';

  do {
    option = await inquireMenu();
    await switchOpt(option);

    console.log();
    await pause();
  } while (option !== 0);
};

const switchOpt = async option => {
  console.log();

  switch (option) {
    case 1:
      tasks.createTask(await ask('Description:'));
      break;

    case 2:
      tasks.pretty().forEach(task => console.log(task));
      break;

    case 3:
      tasks.pretty('completed').forEach(task => console.log(task));
      break;

    case 4:
      tasks.pretty('pending').forEach(task => console.log(task));
      break;

    case 5:
      tasks.toggleTasks(await getTasksToggle(tasks.list()));
      break;

    case 6:
      const id = await getTaskToDelete(tasks.list());
      const ok = id === 0 ? false : await confirm('Are you sure?');

      if (ok) {
        tasks.deleteTask(id);
        console.log('Task deleted!');
      }
      break;
  }
};

module.exports = app;
