// streams 
// used to read or write data sequentially in case of manipulation of data in big files
// types of streams:
// 1. writable (write data sequentially) 2. readable  3. Duplex (read and write data seq.)  4. Transform (modifying data when reading or writing)

{ /* // this is the code for creating a large data file of 10000 lines, which will be used to read date using readstream.

const { writeFileSync } = require('fs')

for (let index = 0; index < 10000; index++) {
    writeFileSync('./content/big.txt', `hello world ${index}\n`, {flag: 'a'});
}

*/}



const { createReadStream } = require('fs')

// const stream = createReadStream('./content/big.txt');
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000});  //reading chunk size
const stream = createReadStream('../content/big.txt', {highWaterMark: 90000, encoding: 'utf-8'});

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => {
    console.log(err)
})


// SERVER Example

// const http = require('http')
// const { createReadStream } = require('fs')

// http.createServer((req,res)=>{
//     // const file = readFileSync('./content/big.txt', 'utf-8')
//     // res.end(file)
//     const fileStream = createReadStream('./content/big.txt', {highWaterMark: 5000, encoding: 'utf-8'});
//     fileStream.on('open',() => {
//         fileStream.pipe(res)
//     })
//     fileStream.on('error', (err) => {
//         res.end(err)
//     })
// }).listen(5000)