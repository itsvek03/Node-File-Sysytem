// fs.writeFile(path, data, options, callback)

const fs = require('fs')
const fileName = 'flag.txt'
const data = 'This is the new Data'

fs.writeFile(fileName, data, { flag: 'a' }, (err) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log('Data Written succesfully')
  }
})

// By deafult, flag is w
