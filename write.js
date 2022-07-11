//fs.write(fd,string[position,enconing],callback)

const fs = require('fs')
const str = 'This is the string i want to write!\n'
const fileName = './flag.txt'

// Step 1 :-> open the file
// Step 2: -> Write the Content
// Step 3: -> Close the file

fs.open(fileName, 'a', (err, fd) => {
  if (err) {
    console.log(err.message)
  } else {
    // Now write the content
    let bytes = fs.writeSync(fd, str) // if we write str[1] => only h will write in the file
    console.log(bytes)

    fs.close(fd, (err) => {
      if (err) {
        console.log(err.message)
      } else {
        console.log('File Closed Successfully !')
      }
    })
  }
})

// a -> Append the content in the file
// w -> Overwrite all the content
