// readFile(filename, encoding, callback_function)

const fs = require('fs')

fs.readFile('./flag.txt', 'utf-8', (err, content) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log(content)

    // If u are using utf-8 then don't use toString()
    // If not, then use .toString()
  }
})
