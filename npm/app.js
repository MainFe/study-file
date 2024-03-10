// http, events, file, fileStream, pipe

// let http = require('http')
// const { Http2ServerRequest } = require('http2')

// http.createServer((req, res) => {
//   res.writeHead(200, {"Content-Type": "text/plainnn"});
//   res.write("Hello, World!!")
//   res.end()
// }).listen(8888)

/////////////////////////////////////////////////////////////// 2
// const events = require('events')
// let eventEmitter = new events.EventEmitter();

// eventEmitter.on('doorOpen', function() {
//   console.log("Ring ring ring")
//   eventEmitter.emit('bellrings', 'Welcome')
// });
// eventEmitter.on('bellrings', function(message) {
//   console.log(message)
// })
// eventEmitter.emit('doorOpen')

/////////////////////////////////////////////////////////////// 3
// const fs = require('fs')
// fs.readFile('npm/input.txt', function(err, data) {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log("Async data is ", data.toString())
//   }
// })

// let data = fs.readFileSync('npm/input.txt', { encoding: 'utf-8' });
// console.log("data", data.toString())
// console.log("This is the end")

/////////////////////////////////////////////////////////////// 4

// stream.. fs
// const fs = require('fs')
// let readableStream = fs.createReadStream('./npm/input.txt')
// let data = ''
// readableStream.setEncoding('utf-8')
// readableStream.on('data', function(chunk) {
//   data += chunk;
// })
// readableStream.on('end', function() {
//   console.log(data)
// })

// let writeData = 'Hello World!'
// let writeableStream = fs.createWriteStream('./npm/output.txt')
// writeableStream.write(writeData, 'utf8')
// writeableStream.end()
// writeableStream.on('finish', function() {
//   console.log('Write completed')
// })

/////////////////////////////////////////////////////////////// 5

// pipe
// const fs = require('fs')
// let readableStream = fs.createReadStream('./npm/in.txt')
// let writeableStream = fs.createWriteStream('./npm/out.txt')
// readableStream.pipe(writeableStream)