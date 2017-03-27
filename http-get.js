var http = require("http");
var concat = require("concat-stream");

var url = process.argv[2];

// http.get(url, function(res) {
//     res.setEncoding("utf8");
//     res.on("data", function(data) {
//         console.log(data);
//     });
// });


http.get(url, function(res) {
   // res.setEncoding("utf8");
    res.pipe(concat(function(data) {
        var str = data.toString();
        var numChar = str.length;
        console.log(numChar);
        console.log(str);
    }));
});