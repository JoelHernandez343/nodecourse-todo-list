const ask = message =>
  new Promise((resolve, reject) => {
    try {
      const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      readLine.question(message, opt => {
        readLine.close();

        resolve(opt);
      });
    } catch (err) {
      reject(err);
    }
  });

module.exports = { ask };
