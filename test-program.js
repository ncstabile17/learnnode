var fs = require('fs');

// var contents = fs.readFileSync(process.argv[2])
// var arrContents = contents.toString().split('\n')
// console.log(arrContents.length-1)

var file = process.argv[2];

  fs.readFile(file, function (err, fileContents) {
      if (err) {
          return console.log(err)
      }
        var arrContents = fileContents.toString().split('\n');
        console.log(arrContents.length-1);
  });
