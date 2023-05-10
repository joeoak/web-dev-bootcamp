const fs = require('fs'); // file system

const folderName = process.argv[2] || 'new-project'; // set name using argument or default name

try {
  // make folder
  fs.mkdirSync(folderName);
  // make file
  fs.writeFileSync(`${folderName}/README.md`, 'Hello world!');
} catch (err) {
  throw err;
}
