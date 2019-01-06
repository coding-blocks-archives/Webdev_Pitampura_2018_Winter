const fs = require('fs')
const path = require('path')


fs.readFile(
  path.join(__dirname, 'myfile.txt'),
  (err, data) => {
    if (err) console.error(err)

    console.log(data.toString())
  }
)

console.log('Writing a file')
