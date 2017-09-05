// console.log("HELLO WORLD");
// console.log(process.argv)


// var total = 0;
// for (var i = 2; i < process.argv.length; i++) {
//     total += +process.argv[i];
// }
// console.log(total);

// var fs = require('fs');
// console.log(fs.readFileSync('./program.js').toString().split('\n').length)

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})
