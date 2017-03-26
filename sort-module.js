const fs = require('fs');
const path = require('path');

var fileArray = [];

module.exports = function (fpath, ext, callback) {
  fs.readdir(fpath, function (err, list) {
        if (err) {
            return callback(err);
        }
        
        list.forEach(function(file) {
          if (path.extname(file).includes(ext)) {
            fileArray.push(file);
          }
        });
        
        callback(null, fileArray);
  
    });
}
