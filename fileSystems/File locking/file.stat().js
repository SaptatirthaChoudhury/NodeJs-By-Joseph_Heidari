const fs = require('fs');



// fetch file details
try {
    const stats = fs.statSync('../command.txt')

    console.log(`File Data Last Modified: ${stats.mtime}`)
    console.log(`File Status Last Modified: ${stats.ctime}`)
} catch (error) {
  console.log(error)
}
