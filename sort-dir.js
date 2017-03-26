// const fs = require('fs');
// const path = require('path');

var sortMod = require('./sort-module.js');

var fpath = process.argv[2];
var ext = process.argv[3];

sortMod(fpath, ext, print);

function print(err, fileList) {
  if (err) {
    console.log(err);
  }
  fileList.forEach(function(file) {
    console.log(file);
  });
}

  // fs.readdir(fpath, function (err, list) {
  //     if (err) {
  //         return console.log(err);
  //     }
      
  //     list.forEach(function(file) {
  //       if (path.extname(file).includes(ext)) {
  //         console.log(file);
  //       }
  //     });
  // });
