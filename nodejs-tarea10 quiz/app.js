const { isUtf8 } = require("buffer");
const { log } = require("console");
const fs = require("fs");

function copyFile(origin, destiny) {
  fs.readFile(origin, "Utf8", (err, data) => {
    if (err) {
      console.log("Error este archoivo no se puede leer");
      return;
    }
    fs.writeFile(destiny, data, 'utf8', (err) => {
      if (err) {
        console.log('el archivo no se escribio correctamente');
        return;
      }

      console.log('tenemos orejas que alegria');
    })
  });
}

const originFile = 'origen.txt';
const destinyFile = 'destino.txt';
copyFile(originFile, destinyFile);
