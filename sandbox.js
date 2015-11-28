var jsonStream = require("JSONStream");

var start = +new Date;

var fs = require('fs');
var stream = require('stream');

var jsonObj = {
    qwe: 123,
    asd: 456,
    zxc: 789,
    vbn: 011,
    rty: 121
};

// // HERE, how to transform a json object in a stream... hmmmm
var writableStream = fs.createWriteStream('stress-stream.json');
// var readableStream = fs.createReadStream('stress-stream.json');
// var parser = JSONStream.parse();

var jsonStream = new stream.Readable({ objectMode: true });
jsonStream.push(jsonObj);
jsonStream.push(null);





// readableStream.on('end', function(chunk) {
//     console.log(((+new Date) - start) + " ms");
// });

//   .pipe(JSONStream.stringify())
// readableStream
    
jsonStream.pipe(JSONStream.stringify()).pipe(writableStream);





// var fs = require('fs'),
//     JSONStream = require('JSONStream');

// var stream = fs.createReadStream('stress.json', {encoding: 'utf8'}),
//     parser = JSONStream.parse();

// stream.pipe(parser);

// parser.on('root', function (obj) {
//   console.log(obj); // whatever you will do with each JSON object
// });