const fs = require('fs')
const path = require('path')

// a/b/c.txt a/bc.txt

fs.writeFile(
  path.join(__dirname, 'myfile.txt'),
  'Hello World',
  {
    flag: 'a'
  },
  (err) => {
    if (err) console.error(err)

    console.log('Write op ended')
  }
)

console.log('Writing a file')
