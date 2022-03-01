const {readFileSync,writeFileSync} = require('fs')
//alternative
// const fs = require('fs')
// fs.read

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

// console.log(first,second)


//creates and writes to the file
// writeFileSync(
//     './content/result-sync.txt',
//     `Here is the result : ${first}, ${second}`
//     )

//appends to file
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a'}
    )