const fs = require('fs');
const path = require('path');

var fpath = process.argv[2];
var ext = process.argv[3];

  fs.readdir(fpath, function (err, list) {
      if (err) {
          return console.log(err);
      }
      
      list.forEach(function(file) {
        if (path.extname(file).includes(ext)) {
          console.log(file);
        }
      });
  });
